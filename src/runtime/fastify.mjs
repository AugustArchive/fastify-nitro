/* eslint-ignore */

import '#internal/nitro/virtual/polyfill';

import { createEvent, sendError } from 'h3';
import { useRuntimeConfig } from '#internal/nitro/config';
import { nitroApp } from '#internal/nitro/app';
import fp from 'fastify-plugin';

export default fp(
  (instance, { prefix, onError }, done) => {
    console.log(useRuntimeConfig());

    const {
      app: { baseURL }
    } = useRuntimeConfig();

    const url = baseURL.slice(0, -1);
    if (prefix !== undefined && prefix !== url) {
      return done(
        new Error(
          `You will need to set 'prefix' to ${url}, not ${prefix} or not set \`prefix\` at all to use the base URL from your Nitropack config`
        )
      );
    }

    instance.all(prefix || baseURL.slice(0, -1) || '/', async (req, reply) => {
      for (const [name, value] of Object.entries(reply.getHeaders())) {
        reply.raw.setHeader(name, value);
      }

      // hijack the reply so we can modify the contents of it
      reply.hijack();

      const event = createEvent(req.raw, reply.raw);
      try {
        await nitroApp.h3App.handler(event);
      } catch (e) {
        if (!(e instanceof Error)) {
          e.unhandled = true;
        }

        if (nitroApp.h3App.options.onError) {
          await nitroApp.h3App.options.onError(e, event);
        } else {
          if (e.unhandled || e.fatal) {
            typeof onError === 'function' && onError(e, event);
          }

          await sendError(event, e, !!nitroApp.h3App.options.debug);
        }
      }
    });

    done();
  },
  {
    fastify: '4.x',
    name: 'noel-nitropack'
  }
);

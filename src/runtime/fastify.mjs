import '#internal/nitro/virtual/polyfill';

import { toNodeListener } from 'h3';
import { nitroApp } from '#internal/nitro/app';
import fp from 'fastify-plugin';

const h3Handler = toNodeListener(nitroApp.h3App);

export default fp(
  (instance, _, done) => {
    instance.use(h3Handler);
    done();
  },
  {
    fastify: '4.x',
    name: 'noel-nitropack',
    dependencies: ['@fastify/middie']
  }
);

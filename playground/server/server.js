import fastify from 'fastify';
import middie from '@fastify/middie';

async function main() {
  const app = fastify({ logger: true });
  app.register(middie);

  const { default: nitroPlugin } = await import('../generation/.output/server/index.mjs');

  app.register(nitroPlugin);
  // app.get('/', (_, res) => res.status(200).send('hi'));
  app.listen({ port: 9090 }, (err) => {
    if (err !== null) {
      console.error(err);
      process.exit(1);
    }
  });
}

main().catch((ex) => {
  console.error(ex);
  process.exit(1);
});

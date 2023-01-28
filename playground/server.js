import fastify from 'fastify';

async function main() {
  const app = fastify({ logger: true });

  const { default: nitroPlugin } = await import('./.output/server/index.mjs');
  app.register(nitroPlugin);

  app.get('/woof', (_, res) => res.status(200).send('woof'));
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

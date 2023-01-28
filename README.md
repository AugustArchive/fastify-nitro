# 🐻‍❄️⚗️ @augu/fastify-nitro

> _Experimental [Nitro](https://nitro.unjs.io) preset to export a Nitro server as middleware for fastify_

**@augu/nitro-preset** is my little preset for building [Nitro](https://nitro.unjs.io) applications that expose a [fastify](https://fastify.io) server or middleware export.

**Why?** -- The other Node-related presets for Nitro didn't have customizable inputs (i.e, you will have to use `node .output/server/server.mjs`) instead of being an export of **h3** -> node listener. So, I built this that exports as a fastify server or middleware (which requires [`@fastify/middie`](https://github.com/fastify/middie) to make it compatible with `node:http`).

## Usage

```shell
$ npm i --save-dev @augu/fastify-nitro
$ yarn add -D @augu/fastify-nitro
```

> **nitro.config.ts**

```ts
import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  preset: '@augu/fastify-nitro'
});
```

## Nuxt Usage

To use this plugin with Nuxt 3, you just need to use `NITRO_PRESET=@augu/fastify-nitro` or add it in your Nuxt configuration:

```ts
export default defineNuxtConfig({
  nitro: {
    preset: '@augu/fastify-nitro'
  }
});
```

## Contributing

Thanks for considering contributing to **@augu/fastify-nitro**! Before you boop your heart out on your keyboard ✧ ─=≡Σ((( つ•̀ω•́)つ, we recommend you to do the following:

- Read the [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- Read the [Contributing Guide](./.github/CONTRIBUTING.md)

If you read both if you're a new time contributor, now you can do the following:

- [Fork me! ＊\*♡( ⁎ᵕᴗᵕ⁎ ）](https://github.com/auguwu/nitro-preset/fork)
- Clone your fork on your machine: `git clone https://github.com/your-username/fastify-nitro`
- Create a new branch: `git checkout -b some-branch-name`
- Run `corepack enable` and use `yarn` for this project
- BOOP THAT KEYBOARD!!!! ♡┉ˏ͛ (❛ 〰 ❛)ˊˎ┉♡
- Commit your changes onto your branch: `git commit -am "add features （｡>‿‿<｡ ）"`
- Push it to the fork you created: `git push -u origin some-branch-name`
- Submit a Pull Request and then cry! ｡･ﾟﾟ･(థ Д థ。)･ﾟﾟ･｡

## License

**@augu/nitro-preset** is released under the **MIT License** with love by [Noel](https://floofy.dev)! :polar_bear::purple_heart:

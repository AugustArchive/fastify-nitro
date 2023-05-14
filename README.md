# 🐻‍❄️⚗️ @augu/fastify-nitro

> _Experimental [Nitro](https://nitro.unjs.io) preset to export a Nitro server as middleware for fastify_

**@augu/fastify-nitro** is my little preset for building [Nitro](https://nitro.unjs.io) applications that expose a [fastify](https://fastify.io) server or middleware export.

> **Note**: Why did you create this?
>
> I made this library to easily integrate fastify with Nitro (or Nuxt 3) so I can have other handlers bound to fastify and I don't really like how server middleware works or is defined, I rather just do it at the application level, not at the meta-framework level.

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

## Base URL

This preset respects the **baseURL** option in the Nitropack configuration. You will need to set the `prefix` to be usuable so fastify knows how to use it!

> **nitro.config.ts**

```ts
import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
    preset: '@augu/fastify-nitro',
    baseURL: '/some-url'
});
```

> **server.js**

```js
const nitroPlugin = await import('./.output/server/index.mjs');

app.register(nitroPlugin, {
    // It has to be the same as `baseURL` in nitro.config.ts or it will
    // error.
    prefix: '/some-url'
});
```

## Contributing

Thanks for considering contributing to **@augu/fastify-nitro**! Before you boop your heart out on your keyboard ✧ ─=≡Σ((( つ•̀ω•́)つ, we recommend you to do the following:

-   Read the [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
-   Read the [Contributing Guide](./.github/CONTRIBUTING.md)

If you read both if you're a new time contributor, now you can do the following:

-   [Fork me! ＊\*♡( ⁎ᵕᴗᵕ⁎ ）](https://github.com/auguwu/nitro-preset/fork)
-   Clone your fork on your machine: `git clone https://github.com/your-username/fastify-nitro`
-   Create a new branch: `git checkout -b some-branch-name`
-   Run `corepack enable` and use `yarn` for this project
-   BOOP THAT KEYBOARD!!!! ♡┉ˏ͛ (❛ 〰 ❛)ˊˎ┉♡
-   Commit your changes onto your branch: `git commit -am "add features （｡>‿‿<｡ ）"`
-   Push it to the fork you created: `git push -u origin some-branch-name`
-   Submit a Pull Request and then cry! ｡･ﾟﾟ･(థ Д థ。)･ﾟﾟ･｡

## License

**@augu/nitro-preset** is released under the **MIT License** with love by [Noel](https://floofy.dev)! :polar_bear::purple_heart:

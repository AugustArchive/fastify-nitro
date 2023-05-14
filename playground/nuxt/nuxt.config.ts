import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: resolve(__dirname, '..', '..', 'dist/index.mjs')
    }
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Replace with your font package name
    },
  },

  output: 'server',
  // @ts-ignore
  adapter: vercel(),
});
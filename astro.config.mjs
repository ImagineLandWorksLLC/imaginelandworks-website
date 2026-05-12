// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
   site: 'https://imaginelandworks.com',
   integrations: [mdx(), sitemap()],
   vite: {
      plugins: [tailwindcss()],
      server: {
         watch: {
            usePolling: true,
            interval: 500,
         },
      },
   }
});

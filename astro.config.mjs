// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';
import webmcp from 'astro-webmcp';

// https://astro.build/config
export default defineConfig({
   site: 'https://imaginelandworks.com',
   trailingSlash: 'always',
   server: {
      port: 3030,
   },
   integrations: [
      mdx(),
      // 404/500 are noindex error pages and should not be in the sitemap.
      sitemap({ filter: (page) => !/[/](404|500)[/]?$/.test(page) }),
      webmcp(),
   ],
   vite: {
      resolve: {
         alias: {
            "@data": "/src/data",
            "@utils": "/src/utils",
         },
      },
      plugins: [tailwindcss()],
      server: {
         watch: {
            usePolling: true,
            interval: 500,
         },
      },
   }
});

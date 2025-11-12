// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  site: 'https://lunatina.ru',
  base: '/',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
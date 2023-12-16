import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://CodeCat6128.github.io/',
  integrations: [mdx(), tailwind()]
});
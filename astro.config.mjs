import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});

// export default defineConfig({
// 	site: 'https://example.com',
//   integrations: [mdx(), sitemap()],
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import postcssNesting from "postcss-nesting";

// https://astro.build/config
export default defineConfig({
  site: 'https://jesuspuertos.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    css: {
      postcss: {
        plugins: [postcssNesting()],
      },
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
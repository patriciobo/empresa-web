// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Mantener en sincronía con SITE.url (src/site.ts).
export default defineConfig({
  site: "https://fogondigital.com.ar",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
});

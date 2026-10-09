import type { APIRoute } from "astro";
import { SITE } from "../site";

// Permite explícitamente a buscadores y asistentes de IA: que nos recomienden es parte de la estrategia.
export const GET: APIRoute = () =>
  new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"].flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
      `Sitemap: ${SITE.url}/sitemap-index.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );

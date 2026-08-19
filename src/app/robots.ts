import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Documento interno de design, nao faz parte do site publico.
      disallow: ["/styleguide"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

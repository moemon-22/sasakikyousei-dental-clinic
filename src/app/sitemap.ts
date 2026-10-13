import type { MetadataRoute } from "next";
import faqs from "@/content/yokohama-faqs.json";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// 固定ページ（src/app 配下のルートと一致させる）
const STATIC_ROUTES = [
  "/",
  "/treatment/",
  "/process/",
  "/first-visit/",
  "/pricing/",
  "/child/",
  "/adult/",
  "/symptoms/overbite/",
  "/symptoms/underbite/",
  "/symptoms/crowded/",
  "/symptoms/openbite/",
  "/symptoms/deepbite/",
  "/symptoms/spaced/",
  "/appliance/",
  "/surgical/",
  "/extraction/",
  "/aftercare/",
  "/before-after/",
  "/achievements/",
  "/risk/",
  "/precautionary/",
  "/notice/",
  "/faq/",
  "/doctor/",
  "/access-info/",
  "/news/",
  "/recruit/",
  "/links/",
  "/columns/",
];

type FaqItem = { slug: string; date: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" || path === "/news/" || path === "/columns/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const columns: MetadataRoute.Sitemap = (faqs as FaqItem[]).map((f) => ({
    url: `${SITE_URL}/columns/${f.slug}/`,
    lastModified: new Date(f.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...columns];
}

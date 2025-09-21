const fs = require("fs");
const path = require("path");

// Список всех URL сайта
const pages = [
  { url: "/", lastmod: new Date().toISOString(), priority: "1.0" },
  { url: "/schedule", lastmod: new Date().toISOString(), priority: "0.9" },
  { url: "/chess-groups/", lastmod: new Date().toISOString(), priority: "0.8" },
  {
    url: "/chess-groups/legacy/",
    lastmod: new Date().toISOString(),
    priority: "0.8",
  },
  { url: "/landing-page/", lastmod: new Date().toISOString(), priority: "0.8" },
  {
    url: "/landing-page/promo/",
    lastmod: new Date().toISOString(),
    priority: "0.7",
  },
  { url: "/success/", lastmod: new Date().toISOString(), priority: "0.5" },
  { url: "/fail/", lastmod: new Date().toISOString(), priority: "0.5" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>https://coolchess.ru${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <priority>${page.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("Sitemap generated!");

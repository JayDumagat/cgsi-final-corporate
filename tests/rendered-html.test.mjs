import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const routes = [
  "/",
  "/about",
  "/about/pressroom",
  "/about/team",
  "/accessibility",
  "/careers",
  "/clients",
  "/clients/individuals-families",
  "/clients/ofws-seafarers",
  "/clients/new-investors",
  "/clients/institutions",
  "/services",
  "/services/broker-assisted-trading",
  "/services/advisory-execution",
  "/services/research",
  "/services/settlement-custody",
  "/services/direct-market-access",
  "/services/pera",
  "/governance",
  "/governance/risk-management",
  "/why-equities",
  "/insights",
  "/insights/market-notes",
  "/insights/guides",
  "/insights/library",
  "/market-news",
  "/market-announcements",
  "/investor-relations",
  "/news",
  "/open-account",
  "/platforms",
  "/help",
  "/tools",
  "/tools/calculators",
  "/tools/stock-screener",
  "/tools/watchlist",
  "/tools/portfolio",
  "/contact",
  "/privacy",
  "/disclosures",
  "/resources",
  "/get-started",
  "/get-started/individual",
  "/get-started/corporate",
];
const htmlFor = (route) =>
  readFile(
    join(
      root,
      ".next/server/app",
      route === "/" ? "index.html" : `${route.slice(1)}.html`,
    ),
    "utf8",
  );

test("every original page and account resource survives the redesign", async () => {
  for (const route of routes) {
    const html = await htmlFor(route);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, route);
    assert.match(html, /id="main-content"/, route);
    assert.doesNotMatch(html, /NEXT_REDIRECT/, `${route} must remain a page`);
  }
});
test("mega menus, utility bar, mobile navigation, and client actions remain", async () => {
  const html = await htmlFor("/");
  for (const marker of [
    "Clients",
    "Services",
    "Insights",
    "Resources",
    "Company",
    "Utility navigation",
    "PSE Trading Participant",
    "Client login",
    "Open an account",
    "Open menu",
  ])
    assert.ok(html.includes(marker), marker);
  assert.match(html, /rl-mega-viewport/);
  assert.match(html, /rl-utility/);
});
test("all rendered internal links have a generated destination and local images exist", async () => {
  const links = new Set();
  const images = new Set();
  for (const route of routes) {
    const html = await htmlFor(route);
    for (const match of html.matchAll(/<a[^>]*href="(\/[^"?]*)"/g))
      links.add(match[1].split("#")[0]);
    for (const match of html.matchAll(/<img[^>]*src="(\/[^"?]+)"/g))
      images.add(match[1]);
  }
  for (const link of links) await htmlFor(link);
  for (const image of images) await access(join(root, "public", image));
});
test("local content and standard Next.js replace the CMS and hosting runtime", async () => {
  const p = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
  assert.equal(p.scripts.start, "next start");
  assert.ok(p.scripts.build.startsWith("next build"));
  for (const name of [
    "payload",
    "drizzle-orm",
    "vinext",
    "wrangler",
    "vite",
    "@cloudflare/vite-plugin",
  ])
    assert.ok(!p.dependencies?.[name] && !p.devDependencies?.[name], name);
  const content = await readFile(join(root, "lib/content.ts"), "utf8");
  assert.doesNotMatch(content, /fetch\(|process\.env|PAYLOAD/);
});
test("individual and corporate documents remain distinct", async () => {
  for (const [type, own, other] of [
    ["individual", "SigCard_I.pdf", "SigCard_C-0001.pdf"],
    ["corporate", "SigCard_C-0001.pdf", "SigCard_I.pdf"],
  ]) {
    const html = await htmlFor(`/get-started/${type}`);
    assert.ok(html.includes(own));
    assert.ok(!html.includes(other));
  }
});

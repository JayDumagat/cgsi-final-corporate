import assert from "node:assert/strict";
import test from "node:test";

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
];

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then((module) => module.default);

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders a complete HTML response without development metadata", async () => {
  const response = await render("/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.doesNotMatch(await response.text(), /codex-preview|content=["']development["']/i);
});

test("renders every primary corporate route", async (t) => {
  for (const pathname of routes) {
    await t.test(pathname, async () => {
      const response = await render(pathname);
      assert.equal(response.status, 200);
      assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
      const html = await response.text();
      assert.match(html, /Caballes-Go Securities|CGSI/);
      assert.doesNotMatch(html, /cgsi-(?:hero|history|ofw|risk|team|trust)(?:-v2)?\.png/);
      assert.doesNotMatch(
        html,
        /concept site|downloadable website|demo site|unconfigured server|prepare inquiry|your message is ready/i,
      );
    });
  }
});

test("homepage exposes institutional navigation and primary pathways", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /Who we serve/);
  assert.match(html, /Expertise/);
  assert.match(html, /Research &amp; insights/);
  assert.match(html, /About CGSI/);
  assert.match(html, /Tools/);
  assert.match(html, /Direct Market Access/);
  assert.match(html, /PERA/);
  assert.match(html, /Investor relations/);
  assert.match(html, /Accessibility/);
  assert.match(html, /Client portal/);
  assert.match(html, /Clarity for every market decision/);
  assert.match(html, /Market snapshot/);
  assert.match(html, /Our expertise/);
  assert.match(html, /Investor resources/);
  assert.match(html, /Leadership/);
  assert.doesNotMatch(html, /Investments in securities can lose value/);
  assert.doesNotMatch(html, /Registered broker-dealer/);
  assert.doesNotMatch(html, /Cookies acceptance|Accept all/i);
});

test("audience pages use differentiated relationship models", async () => {
  const pages = [
    ["/clients/individuals-families", /Household perspective/],
    ["/clients/ofws-seafarers", /Communication protocol/],
    ["/clients/new-investors", /Investor foundations/],
    ["/clients/institutions", /The institutional brief/],
  ];

  for (const [pathname, marker] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(await response.text(), marker);
  }
});

test("expertise pages use capability-specific presentation models", async () => {
  const pages = [
    ["/services/broker-assisted-trading", /Coverage commitments/],
    ["/services/advisory-execution", /Decision brief/],
    ["/services/research", /Research standards/],
    ["/services/settlement-custody", /Post-trade blueprint/],
    ["/services/direct-market-access", /ACCESS MODEL/],
    ["/services/pera", /Retirement horizon/],
  ];

  for (const [pathname, marker] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(await response.text(), marker);
  }
});

test("research, market, and company editorial channels remain distinct", async () => {
  const pages = [
    ["/insights/market-notes", /Market note archive/],
    ["/insights/guides", /Core pathway/],
    ["/insights/library", /Search the complete publication archive/],
    ["/market-news", /CGSI Market Desk/],
    ["/market-announcements", /Official source/],
    ["/about/pressroom", /Corporate releases/],
  ];

  for (const [pathname, marker] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(await response.text(), marker);
  }
});

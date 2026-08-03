import {
  getInsight as getLocalInsight,
  insights as localInsights,
  type Insight,
} from "@/content/insights";

type PayloadInsightDoc = {
  slug: string;
  publicationType?: string;
  category: Insight["category"];
  author?: string | {
    name?: string;
    title?: string;
    organization?: string;
  };
  publishedAt?: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections?: {
    heading: string;
    paragraphs?: { text: string }[];
  }[];
};

// This adapter keeps route components independent from Payload's REST document shape.

type PayloadListResponse<T> = {
  docs: T[];
};

function getCMSBaseURL() {
  return process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
}

function normalizeInsight(document: PayloadInsightDoc): Insight | undefined {
  const author =
    typeof document.author === "string"
      ? document.author
      : document.author?.name;
  const publishedAt = document.publishedAt;

  if (!author || !publishedAt || Number.isNaN(Date.parse(publishedAt))) {
    return undefined;
  }

  return {
    slug: document.slug,
    publicationType:
      document.publicationType === "market-note" ||
      document.publicationType === "guide" ||
      document.publicationType === "research-report"
        ? document.publicationType
        : "research-report",
    category: document.category,
    author,
    publishedAt,
    title: document.title,
    excerpt: document.excerpt,
    readTime: document.readTime,
    intro: document.intro,
    sections:
      document.sections?.map((section) => ({
        heading: section.heading,
        body: section.paragraphs?.map((paragraph) => paragraph.text).filter(Boolean) ?? [],
      })) ?? [],
  };
}

export async function getPublishedInsights(): Promise<Insight[]> {
  const baseURL = getCMSBaseURL();
  if (!baseURL) return localInsights;

  try {
    const response = await fetch(
      `${baseURL}/api/insights?where[status][equals]=published&sort=-publishedAt&limit=100&depth=0`,
      { next: { revalidate: 300 } },
    );
    if (!response.ok) return localInsights;
    const payload = (await response.json()) as PayloadListResponse<PayloadInsightDoc>;
    const normalized = payload.docs.map(normalizeInsight).filter((item): item is Insight => Boolean(item));
    return normalized.length ? normalized : localInsights;
  } catch {
    return localInsights;
  }
}

export async function getPublishedInsight(slug: string): Promise<Insight | undefined> {
  const baseURL = getCMSBaseURL();
  if (!baseURL) return getLocalInsight(slug);

  try {
    const response = await fetch(
      `${baseURL}/api/insights?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&limit=1&depth=0`,
      { next: { revalidate: 300 } },
    );
    if (!response.ok) return getLocalInsight(slug);
    const payload = (await response.json()) as PayloadListResponse<PayloadInsightDoc>;
    return payload.docs[0] ? normalizeInsight(payload.docs[0]) ?? getLocalInsight(slug) : getLocalInsight(slug);
  } catch {
    return getLocalInsight(slug);
  }
}

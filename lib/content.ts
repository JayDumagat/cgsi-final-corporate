import { getInsight, insights } from "@/content/insights";
import { defaultSiteSettings } from "@/content/site-settings";

// Local, typed content. No CMS, database, secrets, or network fetch is required.
export async function getPublishedInsights() {
  return insights;
}

export async function getPublishedInsight(slug: string) {
  return getInsight(slug);
}

export async function getPublicSiteSettings() {
  return defaultSiteSettings;
}

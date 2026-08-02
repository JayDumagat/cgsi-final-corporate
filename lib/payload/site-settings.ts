import {
  defaultSiteSettings,
  type PublicSiteSettings,
} from "@/content/site-settings";

type PayloadSiteSettings = Partial<PublicSiteSettings>;

export async function getPublicSiteSettings(): Promise<PublicSiteSettings> {
  const baseUrl = process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
  if (!baseUrl) return defaultSiteSettings;

  try {
    const response = await fetch(`${baseUrl}/api/globals/site-settings`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return defaultSiteSettings;

    const remote = (await response.json()) as PayloadSiteSettings;

    return {
      ...defaultSiteSettings,
      ...remote,
      announcement: {
        ...defaultSiteSettings.announcement,
        ...(remote.announcement ?? {}),
      },
    };
  } catch {
    return defaultSiteSettings;
  }
}


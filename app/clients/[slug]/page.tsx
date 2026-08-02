import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClientProfileLayout } from "@/components/pages/client-layouts";
import { clientProfiles, getClientProfile } from "@/content/profiles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clientProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getClientProfile(slug);
  if (!profile) return {};
  return {
    title: profile.eyebrow,
    description: profile.description,
  };
}

export default async function ClientProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getClientProfile(slug);
  if (!profile) notFound();

  return <ClientProfileLayout profile={profile} />;
}

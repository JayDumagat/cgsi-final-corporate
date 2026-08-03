import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceProfileLayout } from "@/components/pages/service-layouts";
import { getServiceProfile, serviceProfiles } from "@/content/profiles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getServiceProfile(slug);
  if (!profile) return {};
  return {
    title: profile.eyebrow,
    description: profile.description,
  };
}

export default async function ServiceProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getServiceProfile(slug);
  if (!profile) notFound();

  return <ServiceProfileLayout profile={profile} />;
}

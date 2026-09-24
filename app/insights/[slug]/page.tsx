import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/motion-primitives";
import { getPublishedInsight, getPublishedInsights } from "@/lib/content";
import { insights as localInsights } from "@/content/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localInsights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getPublishedInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = await getPublishedInsight(slug);
  if (!insight) notFound();

  const insights = await getPublishedInsights();
  const currentIndex = insights.findIndex((item) => item.slug === insight.slug);
  const nextInsight = insights[(currentIndex + 1) % insights.length];
  const publishedDate = new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(insight.publishedAt));

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-[#082f42] text-white">
          <div className="corner-dots absolute right-[8%] top-16 h-28 w-40 opacity-35" />
          <div className="site-container py-16 lg:py-24">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-white/68 hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> All insights
            </Link>
            <p className="eyebrow eyebrow-on-dark mt-12">
              {insight.category} · {publishedDate} · {insight.readTime}
            </p>
            <h1 className="display-title mt-7 max-w-5xl text-[clamp(4rem,8vw,7.8rem)] text-balance">
              {insight.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{insight.intro}</p>
            <p className="mt-5 text-xs font-semibold text-white/55">
              By {insight.author}
            </p>
          </div>
        </header>

        <div className="site-container grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-24">
          <div className="max-w-3xl">
            {insight.sections.map((section, index) => (
              <Reveal key={section.heading} className={index ? "mt-14" : ""}>
                <p className="text-xs font-extrabold tracking-[0.15em] text-[#00a800]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.98] text-[#104862] sm:text-5xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-[#536b77]">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </Reveal>
            ))}
          </div>

          <aside>
            <div className="sticky top-36 border border-[#d9e4e4] bg-[#f4f8f7] p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#00a800]">
                Reader note
              </p>
              <h2 className="mt-4 font-bold text-[#104862]">Important context</h2>
              <p className="mt-3 text-xs leading-6 text-[#637780]">
                This guide is general education, not a recommendation or personalized financial
                advice. Securities involve risk, including possible loss of principal.
              </p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#104862]">
                Ask about CGSI services <ArrowRight className="size-4 text-[#00a800]" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-[#d9e4e4] bg-[#f4f8f7] py-14">
        <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Read next</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#104862]">{nextInsight.title}</h2>
          </div>
          <Link href={`/insights/${nextInsight.slug}`} className="btn btn-secondary w-fit">
            Continue reading <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

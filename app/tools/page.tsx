import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Investor Tools",
  description:
    "Explore CGSI planning tools and the roadmap for screening, watchlist, and portfolio workspaces.",
};

const tools = [
  {
    number: "01",
    status: "Available",
    title: "Investment calculators",
    description: "Estimate position size and organize the inputs behind an investment conversation.",
    href: "/tools/calculators",
  },
  {
    number: "02",
    status: "Planned",
    title: "Stock screener",
    description: "A structured discovery workflow built around transparent, investor-defined criteria.",
    href: "/tools/stock-screener",
  },
  {
    number: "03",
    status: "Planned",
    title: "Watchlist",
    description: "A focused place to follow securities, disclosures, and the questions still to answer.",
    href: "/tools/watchlist",
  },
  {
    number: "04",
    status: "Planned",
    title: "Portfolio workspace",
    description: "A future view for allocations, concentration, objectives, and portfolio review.",
    href: "/tools/portfolio",
  },
] as const;

export default function ToolsPage() {
  return (
    <>
      <section className="tools-hub-hero">
        <div className="site-container tools-hub-hero-grid">
          <div>
            <p className="interior-kicker">Investor tools</p>
            <h1>Better inputs for more deliberate decisions.</h1>
            <p>
              Practical utilities should make the work clearer without implying that a formula
              can replace judgment, suitability, or professional discussion.
            </p>
            <Link href="/tools/calculators" className="btn btn-primary">
              Use the calculators
            </Link>
          </div>
          <div className="tools-hub-visual">
            <Image
              src="/images/editorial/market-office.jpg"
              alt="Financial market information displayed on a professional workstation"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true">
              <span>Plan</span>
              <i />
              <span>Evaluate</span>
              <i />
              <span>Review</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-directory">
        <div className="site-container tools-directory-grid">
          <div className="tools-directory-intro">
            <p className="section-label">Workspace roadmap</p>
            <h2>One tool for each stage of the investor workflow.</h2>
            <p>
              Planned tools are shown early so the information architecture can grow without
              disrupting the services and research experience.
            </p>
          </div>
          <div className="tools-directory-list">
            {tools.map((tool, index) => (
              <Reveal animate delay={index * 0.04} key={tool.href}>
                <Link href={tool.href}>
                  <span>{tool.number}</span>
                  <div>
                    <small>{tool.status}</small>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </div>
                  <em aria-hidden="true">→</em>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-principles">
        <div className="site-container tools-principles-grid">
          <div>
            <p className="section-label section-label-on-dark">Design principles</p>
            <h2>Useful, legible, and honest about limitations.</h2>
          </div>
          <div>
            <article><span>01</span><h3>Inputs stay visible</h3><p>Assumptions are shown beside the output they shape.</p></article>
            <article><span>02</span><h3>Sources stay clear</h3><p>Market information should identify its origin and timing.</p></article>
            <article><span>03</span><h3>Risk stays present</h3><p>Tools support a process; they do not promise an investment result.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}

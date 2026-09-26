import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Investor Tools",
  description:
    "Explore CGSI planning tools and the roadmap for screening, watchlist, and portfolio workspaces.",
};

const tools = [
  ["Available", "Investment calculators", "Estimate position size and organize the inputs behind an investment conversation.", "/tools/calculators"],
  ["Planned", "Stock screener", "A structured discovery workflow built around transparent, investor-defined criteria.", "/tools/stock-screener"],
  ["Planned", "Watchlist", "A focused place to follow securities, disclosures, and the questions still to answer.", "/tools/watchlist"],
  ["Planned", "Portfolio workspace", "A future view for allocations, concentration, objectives, and portfolio review.", "/tools/portfolio"],
] as const;

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor tools"
        title="Better inputs for more deliberate decisions."
        description="Practical utilities should make the work clearer without implying that a formula can replace judgment, suitability, or professional discussion."
        image="/images/editorial/market-office.jpg"
        imageAlt="Financial market information displayed on a professional workstation"
      />

      <section className="clean-directory">
        <div className="site-container">
          <div className="clean-section-heading">
            <p className="clean-eyebrow">Tools roadmap</p>
            <h2>One tool for each stage of the workflow.</h2>
          </div>
          <div className="clean-directory-list">
            {tools.map(([status,title,text,href],index)=>(
              <Link href={href} key={href}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <div><small>{status}</small><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Use CGSI investor tools, account resources, and planned research workspaces.",
};

const planned = [
  ["Portfolio workspace", "Review allocation, concentration, and portfolio questions in one place.", "/tools/portfolio"],
  ["Stock screener", "Narrow a research universe using transparent investor-defined criteria.", "/tools/stock-screener"],
  ["Watchlist", "Keep securities and the questions you are following together.", "/tools/watchlist"],
] as const;

export default function ToolsPage() {
  return (
    <>
      <section className="rl-subhero" aria-labelledby="resources-page-title">
        <div className="site-container rl-subhero-grid">
          <div>
            <p className="rl-kicker">Resources</p>
            <h1 id="resources-page-title">Practical tools for the work around an investment decision.</h1>
            <p>
              Use calculators, forms, and research resources to prepare. Tools should clarify the
              inputs—not make the decision for you.
            </p>
          </div>
          <figure>
            <Image
              src="/images/editorial/market-office.jpg"
              alt="Market information displayed in a professional office"
              fill
              priority
              sizes="(min-width: 960px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-tool-feature" aria-labelledby="calculator-title">
        <div className="site-container rl-tool-feature-grid">
          <div>
            <p className="rl-kicker">Available now</p>
            <h2 id="calculator-title">Estimate a trade before you place it.</h2>
            <p>Organize capital, price, and estimated transaction costs before speaking with CGSI or placing an order.</p>
            <Link href="/tools/calculators">
              Open investment calculators
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <figure>
            <Image
              src="/images/editorial/pse-trading-floor.jpg"
              alt="Philippine securities market trading environment"
              fill
              sizes="(min-width: 960px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="rl-planned-tools" aria-labelledby="planned-title">
        <div className="site-container rl-service-directory-grid">
          <div>
            <p className="rl-kicker">Investor workspace</p>
            <h2 id="planned-title">A clearer home for research tasks as the platform grows.</h2>
            <p>These pages describe the intended workflow so visitors know what is available today and what is planned.</p>
          </div>
          <div className="rl-service-directory-list">
            {planned.map(([title, text, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

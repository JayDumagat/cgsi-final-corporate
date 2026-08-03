import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Why Invest in Equities",
  description:
    "Understand the potential advantages and risks of direct stock ownership compared with deposits, bonds, and pooled funds.",
};

const comparisonRows = [
  { trait: "What you hold", stocks: "Direct ownership in a listed company", deposit: "A deposit claim on a bank", bonds: "A debt claim on an issuer", funds: "Units in a professionally managed pool" },
  { trait: "Return source", stocks: "Price appreciation and possible dividends", deposit: "Stated or variable interest", bonds: "Interest and repayment, subject to issuer terms and risk", funds: "Performance of the underlying portfolio, less applicable fees" },
  { trait: "Typical volatility", stocks: "Higher; prices can move materially", deposit: "Generally low for qualifying bank deposits", bonds: "Varies by issuer, term, credit, and rates", funds: "Varies with the fund strategy and underlying assets" },
  { trait: "Decision control", stocks: "High; you select individual holdings and timing", deposit: "Low; product terms are set by the bank", bonds: "Moderate; you select issues, where accessible", funds: "Delegated to the fund manager" },
  { trait: "Liquidity", stocks: "Exchange-traded, subject to market demand", deposit: "Depends on account or term restrictions", bonds: "Depends on product structure and secondary-market access", funds: "Depends on redemption rules and dealing schedule" },
  { trait: "Investor workload", stocks: "Higher research and monitoring responsibility", deposit: "Generally low", bonds: "Issuer, credit, maturity, and rate review", funds: "Manager, mandate, fees, and performance review" },
];

export default function WhyEquitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stocks in a broader financial plan"
        title="The question is not: Which product wins?"
        description="The better question is: Which role should each product play in your life? Direct equities can add ownership, growth potential, liquidity, and control—but only with volatility, research responsibility, and the possibility of loss."
        image="/images/editorial/young-investors.jpg"
        imageAlt="A young couple reviewing financial documents with an advisor"
      >
        <Link href="#comparison" className="btn btn-accent">
          Compare the options
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="py-18 lg:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-36">
              <SectionHeading
                eyebrow="Choosing the right role"
                title="Match the tool to the job."
                description="A better decision separates what must remain stable from what can accept market risk in pursuit of longer-term growth."
              />
            </div>
          </Reveal>
          <div className="border-t border-[#104862]/18">
            {[
              ["01", "Problem", "Long goals need more than good intentions.", "Education, retirement, and family security can span decades while money competes with inflation and changing responsibilities."],
              ["02", "Agitation", "The market rewards no one on a fixed schedule.", "Prices can fall when money is needed, a popular company can disappoint, and emotions can turn a temporary decline into a permanent loss."],
              ["03", "Solution", "Give every product a defined role.", "Protect near-term liquidity, define realistic equity exposure, diversify thoughtfully, and review the business case—not only the price."],
            ].map(([number, label, title, text], index) => (
              <Reveal key={label} delay={index * 0.06}>
                <article className="grid gap-5 border-b border-[#104862]/18 py-9 sm:grid-cols-[80px_130px_1fr] sm:gap-8">
                  <span className="font-display text-5xl font-medium text-[#104862]/24">{number}</span>
                  <p className="pt-2 text-xs font-extrabold tracking-[0.16em] text-[#178438]">{label}</p>
                  <div>
                    <h2 className="font-display text-4xl font-semibold leading-[0.98] text-[#104862]">{title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#60747d]">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082f42] py-18 text-white lg:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Potential advantages"
              title="What direct ownership can add."
              description="These characteristics are opportunities, not promises. Their usefulness depends on company quality, price, diversification, time, and investor behavior."
              inverse
            />
          </Reveal>
          <div className="border-t border-white/18">
            {[
              ["01", "Business ownership", "A share gives an economic interest in a listed company and exposure to how that business performs."],
              ["02", "Potential dividends", "Some companies distribute part of their earnings, but the amount and continuation are not guaranteed."],
              ["03", "Portfolio choice", "Select companies and sectors directly instead of accepting the fixed composition of a pooled product."],
              ["04", "Tradability", "Listed shares can ordinarily be traded during exchange hours, subject to liquidity and the price available."],
            ].map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="grid gap-4 border-b border-white/18 py-8 sm:grid-cols-[70px_0.7fr_1.3fr] sm:gap-8">
                  <span className="font-display text-3xl font-semibold text-[#67ef67]">{number}.</span>
                  <h3 className="font-display text-3xl font-semibold leading-none">{title}</h3>
                  <p className="text-sm leading-7 text-white/62">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="scroll-mt-40 py-18 lg:py-24">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="At-a-glance comparison"
              title="Different structures. Different responsibilities."
              description="This table compares general characteristics only. Actual terms, risks, fees, liquidity, and protections vary by product and provider."
            />
          </Reveal>
          <Reveal className="mt-12">
            <div className="table-scroll" role="region" aria-label="Investment product comparison" tabIndex={0}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Characteristic</th>
                    <th scope="col" className="highlight-cell">Direct stocks</th>
                    <th scope="col">Bank deposit / time deposit</th>
                    <th scope="col">Bonds / fixed income</th>
                    <th scope="col">Pooled funds</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.trait}>
                      <th scope="row">{row.trait}</th>
                      <td className="highlight-cell">{row.stocks}</td>
                      <td>{row.deposit}</td>
                      <td>{row.bonds}</td>
                      <td>{row.funds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-5 max-w-5xl text-xs leading-6 text-[#71858d]">
            Not investment advice. Product suitability depends on your financial position, risk
            capacity, objectives, and time horizon. Bank-deposit insurance, where applicable, is
            subject to governing rules and limits; securities are not bank deposits.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f6f4] py-18 lg:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div className="border-l-4 border-[#00cc00] bg-white p-8 sm:p-10">
              <AlertTriangle className="size-7 text-[#178438]" aria-hidden="true" />
              <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.95] text-[#104862]">
                Risk is not fine print.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#60747d]">
                Stock prices can decline because of company developments, economic conditions,
                interest rates, exchange rates, global events, or market sentiment. An investor may
                lose some or all of the amount invested in a security.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="brand-rule">Questions to ask first</p>
            <h2 className="display-title mt-7 text-[clamp(3.8rem,6vw,6.4rem)] text-[#104862]">
              Make the constraints visible.
            </h2>
            <div className="mt-9 border-t border-[#104862]/18">
              {[
                "Do I have enough emergency liquidity outside the market?",
                "When will this money be needed, and what happens if prices are down then?",
                "How much can one company or sector affect the whole portfolio?",
                "Which information would cause me to buy, hold, reduce, or exit?",
                "Can I tolerate the decline that my financial plan says I can afford?",
              ].map((question, index) => (
                <div key={question} className="grid grid-cols-[54px_1fr] gap-4 border-b border-[#104862]/18 py-5 text-sm leading-7 text-[#4f6873]">
                  <span className="font-display text-2xl font-semibold text-[#00a800]">{String(index + 1).padStart(2, "0")}</span>
                  {question}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="site-container max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Common questions" title="A clearer decision starts with better questions." />
          </Reveal>
          <div className="mt-10 divide-y divide-[#104862]/18 border-y border-[#104862]/18">
            {[
              ["Are stocks better than time deposits?", "They perform different roles. Deposits generally prioritize stability and access under their terms, while stocks offer ownership and growth potential with materially higher price risk. A plan may use both."],
              ["Can I receive regular income from stocks?", "Some listed companies pay dividends, but dividends are decided by the company and may change or stop. Yield alone should not be treated as guaranteed income."],
              ["Does diversification prevent losses?", "No. Diversification can reduce the effect of a single holding or risk factor, but it cannot eliminate market loss or guarantee a positive return."],
              ["How much should a beginner invest?", "Begin with an amount that does not compromise essential expenses or emergency reserves and that allows you to tolerate market movement. Account requirements and product suitability should also be reviewed."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-2">
                <summary className="flex min-h-16 list-none items-center justify-between gap-6 py-4 text-left font-display text-2xl font-semibold text-[#104862] marker:content-none">
                  {question}
                  <ChevronDown className="size-5 shrink-0 text-[#00a800] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-[#60747d]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { InvestmentCalculator } from "@/components/tools/investment-calculator";

export const metadata: Metadata = {
  title: "Investment Calculators",
  description:
    "Use the CGSI position estimator to organize capital, price, and illustrative position size before a trade conversation.",
};

export default function CalculatorsPage() {
  return (
    <>
      <section className="calculator-masthead">
        <div className="site-container calculator-masthead-grid">
          <div>
            <p className="interior-kicker">Tools / Calculators</p>
            <h1>Make the assumptions visible.</h1>
          </div>
          <p>
            Planning calculations can clarify scale and trade-offs. They are illustrative only
            and do not account for suitability, market liquidity, or complete transaction costs.
          </p>
        </div>
      </section>

      <section className="calculator-workbench">
        <div className="site-container">
          <InvestmentCalculator />
        </div>
      </section>

      <section className="calculator-next">
        <div className="site-container calculator-next-grid">
          <div>
            <p className="section-label">Before placing an order</p>
            <h2>Move from the estimate to the complete instruction.</h2>
          </div>
          <ol>
            <li><span>01</span><p>Verify the current market price and applicable board lot.</p></li>
            <li><span>02</span><p>Consider charges, liquidity, concentration, and available cash.</p></li>
            <li><span>03</span><p>Confirm the security, quantity, order conditions, and account.</p></li>
          </ol>
          <Link href="/contact" className="btn btn-secondary">Speak with CGSI</Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="ref-cta" aria-labelledby="ref-cta-title">
      <div className="site-container ref-cta-grid">
        <div>
          <p className="ref-kicker">Ready to take the next step?</p>
          <h2 id="ref-cta-title">Talk to CGSI before you send documents or place an order.</h2>
        </div>
        <div>
          <p>
            Start with the current account requirements or contact the team about a client,
            trading, research, or institutional inquiry.
          </p>
          <div>
            <Link href="/open-account">
              Open an account
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/contact">Contact CGSI</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

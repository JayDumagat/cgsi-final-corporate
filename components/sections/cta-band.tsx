import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="ref-cta" aria-labelledby="ref-cta-title">
      <div className="site-container ref-cta-grid">
        <div>
          <p className="ref-kicker">Next step</p>
          <h2 id="ref-cta-title">Ready to talk to CGSI?</h2>
          <p>Review the account requirements or contact the team before you begin.</p>
        </div>
        <div>
          <Link href="/open-account" className="ref-button-primary">
            Account requirements
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/contact" className="ref-button-link">Contact CGSI</Link>
        </div>
      </div>
    </section>
  );
}

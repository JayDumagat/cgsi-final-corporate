import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="airy-final-cta" aria-labelledby="final-cta-title">
      <div className="site-container airy-final-cta-inner">
        <div>
          <p className="airy-eyebrow">Account opening</p>
          <h2 id="final-cta-title">Open an account with CGSI.</h2>
          <p>
            Review the requirements first, or contact the team if you need help choosing the
            appropriate account path.
          </p>
        </div>
        <div className="airy-final-cta-actions">
          <Link href="/open-account">
            View requirements
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/contact">Contact CGSI</Link>
        </div>
      </div>
    </section>
  );
}

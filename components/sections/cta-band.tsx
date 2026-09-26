import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBand() {
  return (
    <section className="clean-cta">
      <div className="site-container clean-cta-grid">
        <div>
          <p className="clean-eyebrow">Next step</p>
          <h2>Start with a conversation.</h2>
          <p>
            Ask about account requirements, brokerage services, institutional mandates, or the
            right starting point for your needs.
          </p>
        </div>
        <div className="clean-cta-actions">
          <Link href="/contact" className="clean-primary-button">
            Contact CGSI
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/open-account" className="clean-secondary-button">
            Account opening
          </Link>
        </div>
      </div>
    </section>
  );
}

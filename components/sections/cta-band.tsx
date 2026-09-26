import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="airy-final-cta" aria-labelledby="final-cta-title">
      <div className="site-container airy-final-cta-inner">
        <div>
          <p className="airy-eyebrow">Start a conversation</p>
          <h2 id="final-cta-title">Ready when you are.</h2>
          <p>
            Learn what you need to prepare, or speak with CGSI about the right next step for your
            account or mandate.
          </p>
        </div>
        <div className="airy-final-cta-actions">
          <Link href="/open-account">
            Open an account
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/contact">Contact CGSI</Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

import { Reveal } from "@/components/ui/motion-primitives";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-mark" aria-hidden="true">CGSI</div>
      <div className="site-container">
        <Reveal animate className="cta-band-grid">
          <div>
            <p className="cta-band-kicker">Account opening</p>
            <h2>Ready to open an account?</h2>
            <p>
              Request the current checklist, then contact CGSI to confirm the forms and
              supporting documents required for your account type.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/open-account" className="btn btn-accent">Request account checklist</Link>
            <Link href="/contact" className="btn btn-on-dark">Contact CGSI</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

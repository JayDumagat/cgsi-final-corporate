import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Invest with CGSI",
  description:
    "Choose the CGSI client path that fits how you invest, from first-time individual investors to institutions and corporations.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Invest with CGSI"
        title="Choose the support that fits how you invest."
        description="Start with your situation. You can move from basic guidance to professional market access without sorting through a product catalogue first."
        image="/images/editorial/advisor-clients.jpg"
        imageAlt="An adviser speaking with clients"
      />

      <section className="ref-client-paths">
        <div className="site-container ref-client-paths-grid">
          <article>
            <figure>
              <Image src="/images/editorial/long-term-clients.jpg" alt="Private clients discussing long-term plans" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" />
            </figure>
            <div>
              <p className="ref-kicker">Individuals & families</p>
              <h2>Invest with a direct point of contact.</h2>
              <p>For first-time investors, experienced individuals, families, OFWs, and seafarers.</p>
              <nav>
                <Link href="/clients/new-investors">New to investing <ArrowRight size={14} /></Link>
                <Link href="/clients/individuals-families">Individuals & families <ArrowRight size={14} /></Link>
                <Link href="/clients/ofws-seafarers">OFWs & seafarers <ArrowRight size={14} /></Link>
              </nav>
            </div>
          </article>

          <article>
            <figure>
              <Image src="/images/editorial/institutional-team.jpg" alt="Institutional professionals in a meeting" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" />
            </figure>
            <div>
              <p className="ref-kicker">Institutions & corporations</p>
              <h2>Market access built around a professional mandate.</h2>
              <p>Execution, research, DMA, settlement, custody, and operating support for organizations.</p>
              <Link href="/clients/institutions" className="ref-text-link">
                Institutional client services <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="ref-client-assist">
        <div className="site-container">
          <p className="ref-kicker">Not sure where to start?</p>
          <h2>Tell us what you are trying to do.</h2>
          <p>We can point you to the right account, service, or information path before you prepare documents.</p>
          <Link href="/contact" className="ref-primary-button">Contact CGSI <ArrowRight size={15} /></Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { getPublishedInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Market Notes",
  description:
    "Dated CGSI observations on Philippine market movement, sector context, disclosures, and investor decision discipline.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

export default async function MarketNotesPage() {
  const notes = (await getPublishedInsights()).filter(
    (item) => item.publicationType === "market-note",
  );
  const [lead, ...archive] = notes;

  return (
    <>
      <section className="market-notes-masthead">
        <div className="site-container market-notes-title">
          <p>CGSI Research / Market notes</p>
          <h1>What moved. What to verify. What matters next.</h1>
          <span>
            Timely observations are presented as decision context—not predictions or trading
            instructions.
          </span>
        </div>
      </section>

      {lead ? (
        <section className="market-note-lead">
          <div className="site-container market-note-lead-grid">
            <div className="market-note-date">
              <span>{formatDate(lead.publishedAt)}</span>
              <em>Latest note</em>
            </div>
            <article>
              <p>{lead.category}</p>
              <h2>{lead.title}</h2>
              <span>{lead.excerpt}</span>
              <Link href={`/insights/${lead.slug}`}>Read the complete market note →</Link>
            </article>
            <aside>
              <p>Reading discipline</p>
              <strong>One market session is context, not a complete investment thesis.</strong>
            </aside>
          </div>
        </section>
      ) : null}

      <section className="market-note-archive">
        <div className="site-container market-note-archive-grid">
          <div>
            <p className="section-label">Previous observations</p>
            <h2>Market note archive</h2>
          </div>
          <div>
            {archive.map((note) => (
              <Link href={`/insights/${note.slug}`} key={note.slug}>
                <time>{formatDate(note.publishedAt)}</time>
                <span>{note.category}</span>
                <strong>{note.title}</strong>
                <em>{note.readTime}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="market-notes-source">
        <div className="site-container">
          <p>Primary market sources</p>
          <a href="https://edge.pse.com.ph/" target="_blank" rel="noreferrer">PSE EDGE ↗</a>
          <a href="https://www.pse.com.ph/" target="_blank" rel="noreferrer">Philippine Stock Exchange ↗</a>
          <Link href="/insights/library">Research library →</Link>
        </div>
      </section>
    </>
  );
}

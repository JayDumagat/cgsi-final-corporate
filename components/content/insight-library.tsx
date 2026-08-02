"use client";

import Link from "next/link";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useMemo, useState } from "react";

import type { Insight, InsightCategory } from "@/content/insights";

const categories: Array<"All" | InsightCategory> = [
  "All",
  "Getting started",
  "Market basics",
  "Planning",
];

export function InsightLibrary({ items }: { items: Insight[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const formatDate = (value?: string) =>
    value
      ? new Intl.DateTimeFormat("en-PH", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          timeZone: "Asia/Manila",
        }).format(new Date(value))
      : "Investor guide";

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${item.title} ${item.excerpt} ${item.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, items, query]);

  return (
    <div className="insight-library">
      <div className="insight-library-tools">
        <div className="insight-filters" aria-label="Filter insights by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label>
          <span>Search publications</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic or title"
          />
        </label>
      </div>

      <p className="insight-result-count" aria-live="polite">
        {visibleItems.length} {visibleItems.length === 1 ? "publication" : "publications"}
      </p>

      <m.div className="insight-result-list">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((insight) => (
            <m.article
              key={insight.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div>
                <span>{insight.category}</span>
                <small>{formatDate(insight.publishedAt)} · {insight.readTime}</small>
              </div>
              <div>
                <h2>{insight.title}</h2>
                <p>{insight.excerpt}</p>
                <small>By {insight.author}</small>
              </div>
              <Link href={`/insights/${insight.slug}`}>
                Read publication <span aria-hidden="true">→</span>
              </Link>
            </m.article>
          ))}
        </AnimatePresence>
      </m.div>

      {visibleItems.length === 0 ? (
        <div className="insight-empty">
          <p>No publications match that search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </div>
  );
}

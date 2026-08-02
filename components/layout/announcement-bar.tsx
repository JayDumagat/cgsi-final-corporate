"use client";

import Link from "next/link";
import { useState } from "react";

import type { PublicSiteSettings } from "@/content/site-settings";

export function AnnouncementBar({
  announcement,
}: {
  announcement: PublicSiteSettings["announcement"];
}) {
  const [visible, setVisible] = useState(announcement.enabled);

  if (!visible) return null;

  function dismiss() {
    setVisible(false);
  }

  return (
    <div className="announcement-bar" role="region" aria-label="Company announcement">
      <div className="site-container announcement-inner">
        <p>
          <strong>{announcement.label}</strong>
          <span>{announcement.message}</span>
        </p>
        <Link href={announcement.href}>{announcement.linkLabel}</Link>
        {announcement.dismissible ? (
          <button type="button" onClick={dismiss} aria-label="Dismiss announcement">
            Close
          </button>
        ) : null}
      </div>
    </div>
  );
}

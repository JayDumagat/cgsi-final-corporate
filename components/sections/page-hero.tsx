import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  compact?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  compact = false,
  image,
  imageAlt = "",
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <header className={`ref-page-hero ${compact ? "is-compact" : ""}`}>
      <div className="site-container">
        <nav aria-label="Breadcrumb" className="ref-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>

        <div className={`ref-page-hero-grid ${image ? "has-image" : ""}`}>
          <div className="ref-page-hero-copy">
            <p className="ref-kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            {children ? <div className="ref-page-hero-actions">{children}</div> : null}
          </div>

          {image ? (
            <figure className="ref-page-hero-media">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 960px) 47vw, 100vw"
                className="object-cover"
                style={{ objectPosition: imagePosition }}
              />
            </figure>
          ) : null}
        </div>
      </div>
    </header>
  );
}

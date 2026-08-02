import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { HeroCopy, HeroLine } from "@/components/ui/motion-primitives";

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
    <section className="page-hero">
      <div className={`page-hero-shell ${image ? "page-hero-with-image" : ""}`}>
        <div className={`page-hero-copy ${compact ? "page-hero-copy-compact" : ""}`}>
          <div className="page-hero-copy-inner">
            <HeroCopy>
              <HeroLine>
                <nav aria-label="Breadcrumb" className="page-breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">{eyebrow}</span>
                </nav>
              </HeroLine>
              <HeroLine>
                <h1 className="page-title">{title}</h1>
              </HeroLine>
              <HeroLine>
                <p className="page-hero-description">
                  {description}
                </p>
              </HeroLine>
              {children ? <HeroLine className="page-hero-actions">{children}</HeroLine> : null}
            </HeroCopy>
          </div>
        </div>

        {image ? (
          <div className="page-hero-image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div className="page-hero-image-rule" aria-hidden="true" />
          </div>
        ) : (
          <div className="page-hero-index" aria-hidden="true">CGSI / PH EQ</div>
        )}
      </div>
    </section>
  );
}

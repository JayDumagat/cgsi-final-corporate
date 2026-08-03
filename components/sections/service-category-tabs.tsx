"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";

type ServiceItem = {
  number: string;
  title: string;
  text: string;
  href: string;
};

type ServiceCategory = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
  items: readonly ServiceItem[];
};

type ServiceCategoryTabsProps = {
  categories: readonly ServiceCategory[];
};

export function ServiceCategoryTabs({ categories }: ServiceCategoryTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory = categories[activeIndex];

  if (!activeCategory) {
    return null;
  }

  function moveTab(direction: number) {
    const nextIndex = (activeIndex + direction + categories.length) % categories.length;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => tabRefs.current[nextIndex]?.focus());
  }

  function focusTab(index: number) {
    setActiveIndex(index);
    requestAnimationFrame(() => tabRefs.current[index]?.focus());
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveTab(1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveTab(-1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(categories.length - 1);
    }
  }

  const panelId = `${tabsId}-panel`;

  return (
    <div className="service-category-tabs-shell">
      <div
        className="service-category-tabs"
        role="tablist"
        aria-label="Service categories"
      >
        {categories.map((category, index) => {
          const tabId = `${tabsId}-tab-${index}`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={activeIndex === index}
              aria-label={`Show ${category.title}`}
              className="service-category-tab"
              id={tabId}
              key={category.title}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleTabKeyDown}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={activeIndex === index ? 0 : -1}
              type="button"
            >
              {category.eyebrow}
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
        className="service-category-panel"
        id={panelId}
        role="tabpanel"
        tabIndex={0}
      >
        <div className="service-category-panel-media">
          <Image
            src={activeCategory.image}
            alt={activeCategory.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="service-category-panel-content">
          <p className="service-category-eyebrow">{activeCategory.eyebrow}</p>
          <h3>{activeCategory.title}</h3>
          <p className="service-category-panel-description">
            {activeCategory.text}
          </p>
          <div className="service-category-items">
            {activeCategory.items.map((item) => (
              <Link href={item.href} key={item.href}>
                <span className="service-category-item-number">{item.number}</span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.7} />
              </Link>
            ))}
          </div>
          <Link href={activeCategory.href} className="service-category-panel-link">
            Explore this service family <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </div>
  );
}

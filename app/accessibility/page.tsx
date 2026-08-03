import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "CGSI’s approach to accessible digital content, keyboard use, readable interfaces, motion preferences, and support.",
};

const commitments = [
  ["Perceivable", "Readable contrast, meaningful headings, text alternatives, and content that does not rely on color alone."],
  ["Operable", "Keyboard-accessible navigation, visible focus, practical target sizes, and respect for reduced-motion preferences."],
  ["Understandable", "Consistent navigation, plain labels, predictable interactions, and help where clients expect to find it."],
  ["Robust", "Semantic HTML and established interface patterns intended to work with modern assistive technology."],
] as const;

export default function AccessibilityPage() {
  return (
    <>
      <section className="accessibility-masthead">
        <div className="site-container">
          <p className="interior-kicker">Accessibility</p>
          <h1>A financial website should be usable with confidence.</h1>
          <p>
            CGSI is working toward an inclusive digital experience aligned with WCAG 2.2 Level
            AA principles and the practical needs of clients across ages, devices, and abilities.
          </p>
        </div>
      </section>

      <section className="accessibility-content">
        <div className="site-container accessibility-grid">
          <aside>
            <p>On this page</p>
            <a href="#commitments">Our commitments</a>
            <a href="#preferences">Display preferences</a>
            <a href="#feedback">Accessibility feedback</a>
          </aside>
          <article>
            <section id="commitments">
              <p className="section-label">Our commitments</p>
              <h2>Four principles guide the experience.</h2>
              <div className="accessibility-principles">
                {commitments.map(([title, text], index) => (
                  <div key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="preferences">
              <p className="section-label">Display preferences</p>
              <h2>Use the experience that works for you.</h2>
              <p>
                The utility bar includes day and night display modes. Motion follows your device
                preference, and core navigation and content remain available without animation.
              </p>
            </section>
            <section id="feedback">
              <p className="section-label">Accessibility feedback</p>
              <h2>Tell us where the experience creates friction.</h2>
              <p>
                Include the page address, the task you were trying to complete, and any assistive
                technology involved. Please do not include passwords or sensitive account details.
              </p>
              <Link href="/contact" className="btn btn-secondary">Contact CGSI</Link>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

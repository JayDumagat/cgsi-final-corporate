import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[#f3f8f7] py-24 lg:py-32">
      <div className="site-container text-center">
        <SearchX className="mx-auto size-9 text-[#00a800]" aria-hidden="true" />
        <p className="eyebrow mt-6">404 · Page not found</p>
        <h1 className="mx-auto mt-5 max-w-2xl font-serif text-5xl leading-[1] tracking-[-0.04em] text-[#104862] sm:text-6xl">
          This page is not part of the current route.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#637780]">
          Return to the homepage or use the main navigation to find services, investor guides, and
          contact information.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to homepage
        </Link>
      </div>
    </section>
  );
}


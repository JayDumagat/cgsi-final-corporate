import Image from "next/image";
import Link from "next/link";

export function SiteLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Caballes-Go Securities home"
      className="inline-flex min-w-0 items-center"
    >
      <Image
        src="/cgsi-logo.png"
        alt="Caballes-Go Securities, Inc."
        width={537}
        height={140}
        priority
        className={`site-logo-image ${inverse ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

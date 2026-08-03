type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className={`eyebrow ${inverse ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      <h2
        className={`section-title mt-4 text-balance ${
          inverse ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${
            centered ? "mx-auto" : ""
          } ${
            inverse ? "text-white/68" : "text-foreground-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { useScrollReveal } from "../hooks/useScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string[];
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  headline,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} ${
        align === "center" ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-warm-white text-balance">
        {headline.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}

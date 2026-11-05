import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

interface CTASectionProps {
  headline: string[];
  body?: string;
  primaryCta: { label: string; link: string };
  secondaryCta?: { label: string; link: string };
  image?: string;
}

export default function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
  image,
}: CTASectionProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </>
      )}
      <div
        ref={ref}
        className={`relative fade-up ${visible ? "is-visible" : ""} mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 text-center`}
      >
        <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.05] text-warm-white text-balance">
          {headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        {body && (
          <p className="mt-6 text-lg text-warm-white/60 font-display italic">{body}</p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryCta.link} className="btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link to={secondaryCta.link} className="btn-outline">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

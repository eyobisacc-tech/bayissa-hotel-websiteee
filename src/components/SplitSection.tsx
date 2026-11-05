import { useScrollReveal } from "../hooks/useScrollReveal";
import PriceTag, { type SamplePrice } from "./PriceTag";

interface SplitSectionProps {
  index: number;
  title: string;
  description: string;
  image: string;
  placeholderNote?: string | null;
  price?: SamplePrice | null;
  eyebrowPrefix?: string;
}

/** Alternating image/text editorial section used on Dining, Events, and About pages. */
export default function SplitSection({
  index,
  title,
  description,
  image,
  placeholderNote,
  price,
  eyebrowPrefix = "0",
}: SplitSectionProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <p className="eyebrow mb-4">{`${eyebrowPrefix}${index + 1}`}</p>
        <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] text-warm-white mb-5">
          {title}
        </h2>
        <p className="text-lg text-warm-white/60 leading-relaxed max-w-md">
          {description}
        </p>
        {placeholderNote && (
          <p className="mt-4 text-sm text-muted-dark italic">{placeholderNote}</p>
        )}
        {price && <PriceTag {...price} className="mt-8 max-w-md" />}
      </div>
      <div className={`image-reveal overflow-hidden ${reversed ? "lg:order-1" : ""}`}>
        <img
          src={image}
          alt={`${title} — placeholder`}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
    </div>
  );
}

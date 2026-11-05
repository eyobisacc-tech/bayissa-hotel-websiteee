import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PriceTag, { type SamplePrice } from "./PriceTag";

interface RoomCardProps {
  name: string;
  description: string;
  image: string;
  placeholderNote?: string | null;
  price?: SamplePrice;
  ctaLabel?: string;
  ctaLink?: string;
  large?: boolean;
}

export default function RoomCard({
  name,
  description,
  image,
  placeholderNote,
  price,
  ctaLabel = "View Details",
  ctaLink,
  large = false,
}: RoomCardProps) {
  const { ref, visible } = useScrollReveal();

  const content = (
    <article
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} group`}
    >
      <div className="image-reveal relative overflow-hidden">
        <img
          src={image}
          alt={`${name} — placeholder`}
          loading="lazy"
          className={`w-full object-cover ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}
        />
        {placeholderNote && (
          <span className="absolute top-4 right-4 bg-ink/80 text-champagne text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-champagne/30">
            {placeholderNote}
          </span>
        )}
      </div>
      <div className="pt-5">
        <h3 className="font-display text-2xl text-warm-white mb-2">{name}</h3>
        <p className="text-sm text-warm-white/60 leading-relaxed mb-4">{description}</p>
        {price && <PriceTag {...price} className="mb-5" />}
        {ctaLink ? (
          <Link to={ctaLink} className="btn-ghost text-[0.7rem]">
            {ctaLabel}
            <span className="text-champagne">→</span>
          </Link>
        ) : (
          <span className="btn-ghost text-[0.7rem]">
            {ctaLabel}
            <span className="text-champagne">→</span>
          </span>
        )}
      </div>
    </article>
  );

  return content;
}

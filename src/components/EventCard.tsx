import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PriceTag, { type SamplePrice } from "./PriceTag";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  price?: SamplePrice;
  ctaLabel?: string;
  ctaLink?: string;
}

export default function EventCard({
  title,
  date,
  description,
  image,
  price,
  ctaLabel = "Enquire",
  ctaLink = "/contact",
}: EventCardProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <article ref={ref} className={`fade-up ${visible ? "is-visible" : ""} group`}>
      <div className="image-reveal relative overflow-hidden">
        <img
          src={image}
          alt={`${title} — placeholder`}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 text-xs text-champagne tracking-[0.15em] uppercase">
          {date}
        </span>
      </div>
      <div className="pt-5">
        <h3 className="font-display text-2xl text-warm-white mb-2">{title}</h3>
        <p className="text-sm text-warm-white/60 leading-relaxed mb-4">{description}</p>
        {price && <PriceTag {...price} className="mb-5" />}
        <Link to={ctaLink} className="btn-ghost text-[0.7rem]">
          {ctaLabel}
          <span className="text-champagne">→</span>
        </Link>
      </div>
    </article>
  );
}

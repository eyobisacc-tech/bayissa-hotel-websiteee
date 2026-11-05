import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ExperienceCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ExperienceCard({
  number,
  title,
  description,
  link,
  image,
}: ExperienceCardProps) {
  const { ref, visible } = useScrollReveal<HTMLAnchorElement>();

  return (
    <Link
      to={link}
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} group relative block overflow-hidden bg-charcoal`}
    >
      <div className="image-reveal aspect-[4/5]">
        <img
          src={image}
          alt={`${title} — placeholder`}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">
        <span className="font-display text-sm text-champagne tracking-widest mb-2">
          {number}
        </span>
        <h3 className="font-display text-2xl lg:text-3xl text-warm-white mb-2">{title}</h3>
        <p className="text-sm text-warm-white/60 mb-4 leading-relaxed">{description}</p>
        <span className="btn-ghost text-[0.7rem]">
          Explore
          <span className="text-champagne">→</span>
        </span>
      </div>
    </Link>
  );
}

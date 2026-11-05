import { useScrollReveal } from "../hooks/useScrollReveal";
import { socialSection } from "../data/content";

export default function SocialSection() {
  const { ref, visible } = useScrollReveal();
  const s = socialSection;

  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`fade-up ${visible ? "is-visible" : ""} text-center mb-12`}
        >
          <p className="eyebrow mb-4">Social</p>
          <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] text-warm-white leading-[1.05]">
            {s.title}
          </h2>
          <p className="font-display text-2xl text-champagne mt-4 tracking-wide">
            {s.handle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {s.images.map((src, i) => (
            <div
              key={i}
              className="image-reveal relative aspect-square overflow-hidden bg-graphite"
            >
              <img
                src={src}
                alt="Social feed post — placeholder"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={s.cta.link}
            className="btn-outline"
            onClick={(e) => e.preventDefault()}
            aria-label={`Follow ${s.handle} on TikTok`}
          >
            {s.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

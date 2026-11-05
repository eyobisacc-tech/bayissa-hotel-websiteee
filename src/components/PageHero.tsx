interface PageHeroProps {
  eyebrow: string;
  headline: string[];
  subtitle?: string;
  image: string;
}

export default function PageHero({ eyebrow, headline, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] lg:h-[70vh] overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hero-image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />

      <div className="relative h-full flex flex-col items-center justify-end text-center pb-16 lg:pb-24 px-6">
        <div className="fade-up is-visible">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-display text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.02] text-warm-white text-shadow-dark text-balance">
            {headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-warm-white/70 max-w-xl mx-auto font-display italic">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import RoomCard from "../components/RoomCard";
import EventCard from "../components/EventCard";
import CTASection from "../components/CTASection";
import DemoPriceNote from "../components/DemoPriceNote";
import SocialSection from "../components/SocialSection";
import {
  hero,
  intro,
  experiences,
  staySection,
  entertainmentSection,
  eventsSection,
  diningSection,
  galleryPreview,
  locationPreview,
  finalCta,
} from "../data/content";

export default function Home() {
  const introReveal = useScrollReveal<HTMLDivElement>();
  const stayReveal = useScrollReveal<HTMLDivElement>();
  const entReveal = useScrollReveal<HTMLDivElement>();
  const dineReveal = useScrollReveal<HTMLDivElement>();
  const galleryReveal = useScrollReveal<HTMLDivElement>();
  const locReveal = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={hero.image}
          alt="Bayissa Hotel exterior at night — placeholder"
          className="absolute inset-0 w-full h-full object-cover hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="fade-up is-visible">
            <p className="eyebrow mb-6 text-champagne">{hero.location}</p>
            <h1 className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[7rem] xl:text-[8rem] leading-[0.95] text-warm-white text-shadow-dark">
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 text-base lg:text-lg text-warm-white/70 max-w-xl mx-auto leading-relaxed font-display italic">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={hero.primaryCta.link} className="btn-primary">
                {hero.primaryCta.label}
              </Link>
              <Link to={hero.secondaryCta.link} className="btn-outline">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        <a
          href={hero.scrollLink.link}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-white/50 hover:text-champagne transition-colors duration-300"
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase">{hero.scrollLink.label}</span>
          <span className="w-px h-10 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse" />
        </a>
      </section>

      {/* ════════════════════ INTRO ════════════════════ */}
      <section id="intro" className="bg-ink py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={introReveal.ref}
            className={`fade-up ${introReveal.visible ? "is-visible" : ""} max-w-4xl`}
          >
            <p className="eyebrow mb-6">{intro.eyebrow}</p>
            <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.05] text-warm-white text-balance">
              {intro.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-warm-white/60 leading-relaxed max-w-2xl">
              {intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════ EXPERIENCE CARDS ════════════════════ */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.number} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ STAY SECTION ════════════════════ */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={stayReveal.ref}
            className={`fade-up ${stayReveal.visible ? "is-visible" : ""} flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6`}
          >
            <div>
              <p className="eyebrow mb-5">{staySection.eyebrow}</p>
              <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-warm-white">
                {staySection.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-5 text-lg text-warm-white/60 max-w-md">{staySection.description}</p>
            </div>
            <Link to={staySection.cta.link} className="btn-ghost text-[0.75rem] shrink-0">
              {staySection.cta.label}
              <span className="text-champagne">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {staySection.rooms.map((room, i) => (
              <RoomCard key={i} {...room} ctaLink="/stay" />
            ))}
          </div>
          <DemoPriceNote className="mt-10 text-center" />
        </div>
      </section>

      {/* ════════════════════ ENTERTAINMENT SECTION ════════════════════ */}
      <section className="relative bg-charcoal py-0">
        <div
          ref={entReveal.ref}
          className={`fade-up ${entReveal.visible ? "is-visible" : ""}`}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 lg:pt-32">
            <p className="eyebrow mb-5">{entertainmentSection.eyebrow}</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.05] text-warm-white">
                {entertainmentSection.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <Link to={entertainmentSection.cta.link} className="btn-ghost text-[0.75rem] shrink-0">
                {entertainmentSection.cta.label}
                <span className="text-champagne">→</span>
              </Link>
            </div>
            <p className="mt-6 text-lg text-warm-white/60 max-w-2xl">{entertainmentSection.body}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            {entertainmentSection.images.map((src, i) => (
              <div
                key={i}
                className="image-reveal relative overflow-hidden aspect-[3/4] lg:aspect-[4/5]"
              >
                <img
                  src={src}
                  alt="Entertainment and nightlife — placeholder"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20 hover:bg-ink/5 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ EVENTS SECTION ════════════════════ */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow={eventsSection.eyebrow}
            headline={eventsSection.headline}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {eventsSection.cards.map((card, i) => (
              <EventCard key={i} {...card} ctaLabel="Enquire" />
            ))}
          </div>
          <DemoPriceNote className="mt-10 text-center" />
          <div className="mt-12 text-center">
            <Link to={eventsSection.cta.link} className="btn-outline">
              {eventsSection.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ DINING SECTION ════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={diningSection.image}
          alt="Dining atmosphere — placeholder"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div
          ref={dineReveal.ref}
          className={`relative fade-up ${dineReveal.visible ? "is-visible" : ""} mx-auto max-w-[1400px] px-6 lg:px-10 w-full`}
        >
          <p className="eyebrow mb-5">{diningSection.eyebrow}</p>
          <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.05] text-warm-white text-balance">
            {diningSection.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-warm-white/70 max-w-xl leading-relaxed">
            {diningSection.body}
          </p>
          <div className="mt-8">
            <Link to={diningSection.cta.link} className="btn-primary">
              {diningSection.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ SOCIAL SECTION ════════════════════ */}
      <SocialSection />

      {/* ════════════════════ GALLERY PREVIEW ════════════════════ */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={galleryReveal.ref}
            className={`fade-up ${galleryReveal.visible ? "is-visible" : ""} flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6`}
          >
            <div>
              <p className="eyebrow mb-5">{galleryPreview.eyebrow}</p>
              <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-warm-white">
                {galleryPreview.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <Link to={galleryPreview.cta.link} className="btn-ghost text-[0.75rem] shrink-0">
              {galleryPreview.cta.label}
              <span className="text-champagne">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {galleryPreview.images.map((img, i) => (
              <div
                key={i}
                className={`image-reveal relative overflow-hidden bg-graphite ${
                  img.span === "tall" ? "row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20 hover:bg-transparent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ LOCATION / CONTACT PREVIEW ════════════════════ */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={locReveal.ref}
            className={`fade-up ${locReveal.visible ? "is-visible" : ""}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="eyebrow mb-5">{locationPreview.eyebrow}</p>
                <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] text-warm-white">
                  {locationPreview.headline.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-6 text-lg text-champagne tracking-wide font-display">
                  {locationPreview.location}
                </p>
                <p className="mt-4 text-sm text-muted italic">{locationPreview.contactNote}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 border-b border-graphite pb-3">
                    <span className="eyebrow w-24">Phone</span>
                    <span className="text-sm text-muted-dark italic">To be updated</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-graphite pb-3">
                    <span className="eyebrow w-24">Email</span>
                    <span className="text-sm text-muted-dark italic">To be updated</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-graphite pb-3">
                    <span className="eyebrow w-24">WhatsApp</span>
                    <span className="text-sm text-muted-dark italic">To be updated</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="btn-outline">
                    Contact Bayissa
                  </Link>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-[4/3] bg-graphite border border-graphite overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 border border-champagne rounded-full flex items-center justify-center">
                      <span className="text-champagne text-xl">⊕</span>
                    </div>
                    <p className="text-sm text-muted tracking-[0.15em] uppercase">Map Placeholder</p>
                    <p className="text-xs text-muted-dark mt-2">{locationPreview.location}</p>
                  </div>
                </div>
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,169,110,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ FINAL CTA ════════════════════ */}
      <CTASection
        headline={finalCta.headline}
        body={finalCta.body}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        image={finalCta.image}
      />
    </>
  );
}

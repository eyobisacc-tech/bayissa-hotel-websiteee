import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SplitSection from "../components/SplitSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutPage } from "../data/content";

// NOTE: Factual About content should be replaced after client verification.
// Do not treat placeholder copy as verified business history, founding year, etc.

export default function About() {
  const introReveal = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        headline={aboutPage.hero.headline}
        subtitle={aboutPage.hero.subtitle}
        image={aboutPage.hero.image}
      />

      {/* Intro */}
      <section className="bg-ink py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={introReveal.ref}
            className={`fade-up ${introReveal.visible ? "is-visible" : ""} max-w-3xl`}
          >
            <p className="eyebrow mb-6">Our Philosophy</p>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-white leading-relaxed text-balance">
              {aboutPage.intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24 lg:space-y-32">
          {aboutPage.pillars.map((pillar, i) => (
            <SplitSection
              key={pillar.title}
              index={i}
              title={pillar.title}
              description={pillar.description}
              image={pillar.image}
            />
          ))}
        </div>
      </section>

      {/* Location note */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10 text-center">
          <p className="eyebrow mb-4">Location</p>
          <h2 className="font-display text-3xl lg:text-5xl text-warm-white mb-4">
            {aboutPage.location.title}
          </h2>
          <p className="text-lg text-warm-white/60 leading-relaxed">
            {aboutPage.location.description}
          </p>
        </div>
      </section>

      <CTASection
        headline={["Come", "Experience Bayissa."]}
        body="More than a place to stay."
        primaryCta={{ label: "Contact Bayissa", link: "/contact" }}
        secondaryCta={{ label: "View Gallery", link: "/gallery" }}
        image="https://images.pexels.com/photos/12688962/pexels-photo-12688962.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}

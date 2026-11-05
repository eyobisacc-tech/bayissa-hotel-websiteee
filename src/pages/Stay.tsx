import PageHero from "../components/PageHero";
import RoomCard from "../components/RoomCard";
import CTASection from "../components/CTASection";
import DemoPriceNote from "../components/DemoPriceNote";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { stayPage } from "../data/content";

export default function Stay() {
  const reveal = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow={stayPage.hero.eyebrow}
        headline={stayPage.hero.headline}
        subtitle={stayPage.hero.subtitle}
        image={stayPage.hero.image}
      />

      {/* Room category cards */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={reveal.ref}
            className={`fade-up ${reveal.visible ? "is-visible" : ""} max-w-2xl mb-14`}
          >
            <p className="text-warm-white/60 text-lg leading-relaxed">
              {stayPage.hero.subtitle}
            </p>
            <p className="mt-4 text-sm text-muted-dark italic">
              Room categories shown below are placeholders — details to be confirmed.
            </p>
            <DemoPriceNote className="mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {stayPage.rooms.map((room, i) => (
              <RoomCard key={i} {...room} ctaLink="/contact" ctaLabel="Ask About Availability" large />
            ))}
          </div>
        </div>
      </section>

      {/* Info note */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10 text-center">
          <p className="font-display text-2xl lg:text-3xl text-warm-white leading-relaxed text-balance">
            Room specifics — including amenities, bed sizes and availability — will be added once verified.
          </p>
          <p className="mt-4 text-sm text-muted italic">
            To be confirmed
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={["Ask About", "Availability."]}
        body="Get in touch to learn more about staying at Bayissa."
        primaryCta={{ label: "Enquire Now", link: "/contact" }}
        secondaryCta={{ label: "Explore Dining", link: "/dining" }}
        image="https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}

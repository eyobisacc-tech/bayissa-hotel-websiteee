import PageHero from "../components/PageHero";
import EventCard from "../components/EventCard";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import SplitSection from "../components/SplitSection";
import DemoPriceNote from "../components/DemoPriceNote";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { eventsPage } from "../data/content";

export default function Events() {
  const galleryReveal = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow={eventsPage.hero.eyebrow}
        headline={eventsPage.hero.headline}
        subtitle={eventsPage.hero.subtitle}
        image={eventsPage.hero.image}
      />

      {/* Section blocks */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24 lg:space-y-32">
          <DemoPriceNote />
          {eventsPage.sections.map((section, i) => (
            <SplitSection
              key={section.title}
              index={i}
              title={section.title}
              description={section.description}
              image={section.image}
              price={section.price}
            />
          ))}
        </div>
      </section>

      {/* Upcoming events cards */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="What's On"
            headline={["Upcoming."]}
            className="mb-4"
          />
          <p className="text-sm text-muted-dark italic mb-4">
            Event details to be announced — check back soon.
          </p>
          <DemoPriceNote className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eventsPage.eventCards.map((card, i) => (
              <EventCard key={i} {...card} ctaLabel="Enquire" />
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment gallery */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Atmosphere"
            headline={["The Energy."]}
            className="mb-12"
          />
          <div
            ref={galleryReveal.ref}
            className={`stagger ${galleryReveal.visible ? "is-visible" : ""} grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4`}
          >
            {eventsPage.gallery.map((src, i) => (
              <div
                key={i}
                className="image-reveal relative overflow-hidden aspect-[4/3] bg-graphite"
              >
                <img
                  src={src}
                  alt="Entertainment atmosphere — placeholder"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20 hover:bg-transparent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={["Make It", "a Moment."]}
        body="Planning an event or celebration? Let's talk."
        primaryCta={{ label: "Event Enquiry", link: "/contact" }}
        secondaryCta={{ label: "Explore Rooms", link: "/stay" }}
        image="https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}

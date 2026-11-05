import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import SplitSection from "../components/SplitSection";
import DemoPriceNote from "../components/DemoPriceNote";
import PriceTag, { type SamplePrice } from "../components/PriceTag";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { diningPage } from "../data/content";

export default function Dining() {
  return (
    <>
      <PageHero
        eyebrow={diningPage.hero.eyebrow}
        headline={diningPage.hero.headline}
        subtitle={diningPage.hero.subtitle}
        image={diningPage.hero.image}
      />

      {/* Food / Drinks / Atmosphere */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24 lg:space-y-32">
          <DemoPriceNote />
          {diningPage.sections.map((section, i) => (
            <SplitSection
              key={section.title}
              index={i}
              title={section.title}
              description={section.description}
              image={section.image}
              placeholderNote={section.placeholderNote}
              price={section.price}
            />
          ))}
        </div>
      </section>

      {/* Venue sections */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Venues"
            headline={["The Spaces"]}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {diningPage.venueSections.map((venue) => (
              <VenueCard key={venue.title} {...venue} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={["Reserve", "Your Table."]}
        body="Get in touch about dining at Bayissa."
        primaryCta={{ label: "Dining Enquiries", link: "/contact" }}
        secondaryCta={{ label: "Explore Events", link: "/events" }}
        image="https://images.pexels.com/photos/30658142/pexels-photo-30658142.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}

function VenueCard({
  title,
  description,
  image,
  price,
}: {
  title: string;
  description: string;
  image: string;
  price: SamplePrice;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`}>
      <div className="image-reveal overflow-hidden">
        <img
          src={image}
          alt={`${title} — placeholder`}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
      <h3 className="font-display text-2xl text-warm-white mt-5 mb-2">{title}</h3>
      <p className="text-sm text-warm-white/60 leading-relaxed">{description}</p>
      <PriceTag {...price} className="mt-5" />
      <p className="mt-3 text-xs text-muted-dark italic">Details to be updated</p>
    </div>
  );
}

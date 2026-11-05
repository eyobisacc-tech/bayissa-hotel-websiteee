import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        headline={["See Bayissa."]}
        subtitle="A visual journey through the experience — placeholders for now, ready for real photography."
        image="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        headline={["Experience", "It in Person."]}
        body="Photography is just the beginning."
        primaryCta={{ label: "Contact Bayissa", link: "/contact" }}
        secondaryCta={{ label: "Explore Events", link: "/events" }}
        image="https://images.pexels.com/photos/18408870/pexels-photo-18408870.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}

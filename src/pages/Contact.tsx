import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { contactPage, site } from "../data/content";

export default function Contact() {
  const reveal = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        headline={contactPage.hero.headline}
        subtitle={contactPage.hero.subtitle}
        image={contactPage.hero.image}
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            ref={reveal.ref}
            className={`fade-up ${reveal.visible ? "is-visible" : ""} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`}
          >
            {/* Left: Contact info */}
            <div>
              <p className="eyebrow mb-5">Get in Touch</p>
              <h2 className="font-display text-3xl lg:text-4xl text-warm-white mb-8 leading-relaxed">
                We'd love to hear from you.
              </h2>

              <div className="space-y-5">
                <div className="border-b border-graphite pb-4">
                  <p className="eyebrow text-muted mb-2">Location</p>
                  <p className="text-lg text-warm-white">{site.location}</p>
                  <p className="text-sm text-muted-dark italic mt-1">
                    Exact address to be updated
                  </p>
                </div>

                <div className="border-b border-graphite pb-4">
                  <p className="eyebrow text-muted mb-2">Phone</p>
                  <p className="text-sm text-muted-dark italic">To be updated</p>
                </div>

                <div className="border-b border-graphite pb-4">
                  <p className="eyebrow text-muted mb-2">Email</p>
                  <p className="text-sm text-muted-dark italic">To be updated</p>
                </div>

                <div className="border-b border-graphite pb-4">
                  <p className="eyebrow text-muted mb-2">WhatsApp</p>
                  <p className="text-sm text-muted-dark italic">To be updated</p>
                </div>

                <div className="pt-2">
                  <p className="eyebrow text-muted mb-2">TikTok</p>
                  <p className="text-lg text-champagne">{site.social.tiktok}</p>
                </div>
              </div>

              <p className="mt-8 text-sm text-muted-dark italic">
                {contactPage.contactNote}
              </p>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative aspect-[16/7] bg-graphite border border-graphite overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-champagne rounded-full flex items-center justify-center">
                  <span className="text-champagne text-xl">⊕</span>
                </div>
                <p className="text-sm text-muted tracking-[0.15em] uppercase">Map Placeholder</p>
                <p className="text-xs text-muted-dark mt-2">{contactPage.location}</p>
              </div>
            </div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,169,110,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.12) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

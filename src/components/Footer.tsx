import { Link } from "react-router-dom";
import { navLinks, site } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-graphite/40">
      {/* Top section */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl text-warm-white tracking-wide">BAYISSA</h3>
            <p className="font-display text-sm text-champagne tracking-[0.3em] mt-1">HOTEL &amp; SPA</p>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              {site.location}
            </p>
            <p className="text-xs text-muted-dark mt-2 italic">
              {site.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className="text-sm text-warm-white/70 hover:text-champagne transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="eyebrow mb-5">Social</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-warm-white/70">
                  TikTok — <span className="text-champagne">{site.social.tiktok}</span>
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-dark italic">Instagram — Coming soon</span>
              </li>
              <li>
                <span className="text-sm text-muted-dark italic">Facebook — Coming soon</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="eyebrow mb-5">Get in Touch</h4>
            <p className="text-sm text-muted mb-4 italic">
              Contact details to be updated
            </p>
            <Link to="/contact" className="btn-outline !py-2.5 !px-5 text-[0.7rem]">
              Contact Bayissa
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-graphite/30">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-dark">
            © 2026 Bayissa Hotel &amp; Spa. All rights reserved.
          </p>
          <p className="text-xs text-muted-dark">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}

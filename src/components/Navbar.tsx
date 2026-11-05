import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks, site } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-ink/95 backdrop-blur-md border-b border-graphite/50"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center" aria-label="Bayissa Hotel & Spa — Home">
            <span className="font-display text-2xl lg:text-[1.7rem] tracking-wide text-warm-white leading-none">
              BAYISSA
            </span>
            <span className="font-display text-xs lg:text-sm text-champagne tracking-[0.3em] ml-2 mt-1">
              HOTEL &amp; SPA
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => {
              const active = location.pathname === item.link;
              return (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`text-xs font-body tracking-[0.15em] uppercase transition-colors duration-300 link-underline ${
                      active ? "text-champagne" : "text-warm-white/80 hover:text-warm-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-[0.7rem]">
            Enquire Now
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="relative flex h-full flex-col items-center justify-center gap-8 px-6">
          <ul className="flex flex-col items-center gap-7 stagger" style={{ animationDelay: "0.1s" }}>
            {navLinks.map((item) => {
              const active = location.pathname === item.link;
              return (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`font-display text-3xl tracking-wide transition-colors ${
                      active ? "text-champagne" : "text-warm-white hover:text-champagne"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="/contact" className="btn-primary mt-4">
            Enquire Now
          </Link>
          <p className="text-muted text-xs tracking-[0.2em] uppercase mt-4">{site.location}</p>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { galleryPage } from "../data/content";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const { ref, visible } = useScrollReveal();

  const images =
    filter === "All"
      ? galleryPage.images
      : galleryPage.images.filter((img) => img.category === filter);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {galleryPage.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              filter === cat
                ? "bg-champagne text-ink border-champagne"
                : "border-graphite text-warm-white/60 hover:border-champagne hover:text-champagne"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div
        ref={ref}
        className={`stagger ${visible ? "is-visible" : ""} columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5 [column-fill:_balance]`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="image-reveal mb-4 lg:mb-5 overflow-hidden break-inside-avoid bg-graphite"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

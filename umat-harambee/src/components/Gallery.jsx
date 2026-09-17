import { useEffect, useState } from "react";
import { GALLERY, GALLERY_CATEGORIES } from "../data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, items.length]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {["All", ...GALLERY_CATEGORIES].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              filter === cat
                ? "border-gold bg-gold text-ink"
                : "border-mist text-slate hover:border-ink dark:border-ink-soft dark:text-paper/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group aspect-square overflow-hidden rounded-xl bg-paper-dim dark:bg-ink-soft cursor-pointer"
          >
            {item.image && !item.image.startsWith("[") ? (
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-slate/60">
                {item.category} photo placeholder
              </div>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && items[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-4 animate-reveal"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-paper cursor-pointer"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-paper cursor-pointer"
          >
            ‹
          </button>
          <div
            className="max-h-[80vh] max-w-3xl rounded-xl bg-ink-soft p-4 text-center text-paper/70"
            onClick={(e) => e.stopPropagation()}
          >
            {items[openIndex].image && !items[openIndex].image.startsWith("[") ? (
              <img src={items[openIndex].image} alt={items[openIndex].alt} className="max-h-[70vh] rounded-lg" />
            ) : (
              <p className="p-10">Image placeholder — {items[openIndex].category}</p>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-paper cursor-pointer"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
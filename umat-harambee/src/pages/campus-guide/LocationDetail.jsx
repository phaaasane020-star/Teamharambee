import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import NavigateButton from "../../components/NavigateButton";
import EmptyState from "../../components/EmptyState";
import SectionReveal from "../../components/SectionReveal";
import { useFavorites } from "../../context/FavoritesContext";
import { getLocationBySlug } from "../../data/locations";

export default function LocationDetail() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);
  const { isFavorite, toggleFavorite, addRecent } = useFavorites();

  useEffect(() => {
    if (location) addRecent(location.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!location) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <EmptyState
          title="Location not found"
          description="This campus location doesn't exist or may have been removed."
          action={
            <Link to="/campus-guide" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink">
              Back to Campus Guide
            </Link>
          }
        />
      </div>
    );
  }

  const fav = isFavorite(location.slug);

  const shareLocation = async () => {
    const shareData = { title: location.name, text: location.name, url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* cancelled */ }
    } else {
      try { await navigator.clipboard.writeText(window.location.href); } catch { /* clipboard unavailable */ }
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Campus Guide", to: "/campus-guide" },
          { label: location.name },
        ]}
      />

      <SectionReveal>
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-paper-dim dark:bg-ink-soft">
          {location.image && !location.image.startsWith("[") ? (
            <img src={location.image} alt={location.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-slate/60">
              Image placeholder
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">
              {location.category}
            </span>
            <h1 className="mt-1 font-display text-3xl text-ink dark:text-paper">{location.name}</h1>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(location.slug)}
              className="rounded-full border border-mist px-4 py-2 text-sm dark:border-ink-soft"
            >
              {fav ? "★ Saved" : "☆ Save"}
            </button>
            <button
              type="button"
              onClick={shareLocation}
              className="rounded-full border border-mist px-4 py-2 text-sm dark:border-ink-soft"
            >
              Share Location
            </button>
          </div>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-slate dark:text-paper/75">{location.description}</p>

        <dl className="mt-6">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">Address</dt>
            <dd className="mt-1 text-sm text-ink dark:text-paper">{location.address}</dd>
          </div>
        </dl>

        <div className="mt-8">
          <NavigateButton location={location} />
        </div>
      </SectionReveal>
    </div>
  );
}
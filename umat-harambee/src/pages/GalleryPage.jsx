import Breadcrumbs from "../components/Breadcrumbs";
import Gallery from "../components/Gallery";
import SectionReveal from "../components/SectionReveal";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
      <SectionReveal>
        <h1 className="font-display text-4xl text-ink dark:text-paper">Gallery</h1>
        <p className="mt-3 max-w-xl text-slate dark:text-paper/70"></p>
      </SectionReveal>
      <div className="mt-8">
        <Gallery />
      </div>
    </div>
  );
}

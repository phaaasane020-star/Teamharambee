import { Link } from "react-router-dom";
import { CANDIDATE } from "../data/candidate";
import { TEAM } from "../data/team";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper contour-field">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-gold">
            {TEAM.name}
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            {CANDIDATE.name}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-paper/75">
            A student-focused platform for campus life at UMaT. Built around
            engagement, welfare, ideas, and finding your way around.
          </p>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-gold">
            {TEAM.slogan}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-deep hover:shadow-[0_0_20px_rgba(242,183,5,0.5)] cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-gold hover:text-gold cursor-pointer"
            >
              Explore UMaT
            </Link>
            <a
              href="https://chat.whatsapp.com/D4GYf4xkmPNFEduWtd6Mi8?s=sw&p=i&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-gold hover:text-gold cursor-pointer"
            >
              💬 WhatsApp Group
            </a>
            <a
              href="https://www.tiktok.com/@harambee02"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-gold hover:text-gold cursor-pointer"
            >
              🎵 TikTok Channel
            </a>
          </div>
        </div>

        <div className="animate-reveal" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-gold/20 bg-ink-soft">
            {CANDIDATE.photo && !CANDIDATE.photo.startsWith("[") ? (
              <img src={CANDIDATE.photo} alt={CANDIDATE.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-paper/40">
                {CANDIDATE.photo}
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-gold">
                {CANDIDATE.programme} · {CANDIDATE.level}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
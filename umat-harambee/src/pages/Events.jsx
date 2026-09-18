import Breadcrumbs from "../components/Breadcrumbs";
import SectionReveal from "../components/SectionReveal";

const MESSAGE = "Coming soon, stay tuned";

export default function AcademicBank() {
  const letters = MESSAGE.split("");

  return (
    <div className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Academic Bank" }]} />

        <SectionReveal className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-gold">
            Campus Events
          </span>

          <div
            aria-hidden="true"
            className="relative mt-10 grid h-24 w-24 place-items-center rounded-full border-2 border-gold/40"
          >
            <span className="absolute inset-0 animate-ping rounded-full border-2 border-gold/30" />
            <span className="text-4xl">🕜</span>
          </div>

          <h1
            className="mt-8 flex flex-wrap justify-center font-display text-3xl text-balance sm:text-4xl lg:text-5xl"
            role="text"
            aria-label={MESSAGE}
          >
            {letters.map((char, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="animate-reveal inline-block"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-lg text-paper/70">
            Exciting campus events are on the way. Check back soon for updates!
          </p>

          <div className="mt-8 flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gold" style={{ animationDelay: "0ms" }} />
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gold" style={{ animationDelay: "150ms" }} />
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gold" style={{ animationDelay: "300ms" }} />
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

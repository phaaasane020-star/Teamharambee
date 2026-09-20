import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionReveal from "../components/SectionReveal";
import ValueCard from "../components/ValueCard";
import PriorityCard from "../components/PriorityCard";
import LocationCard from "../components/LocationCard";
import EventCard from "../components/EventCard";
import WhatsAppButton from "../components/WhatsAppButton";
import TiktokButton from "../components/TiktokButton";
import ContactForm from "../components/ContactForm";
import FeedbackForm from "../components/FeedbackForm";
import AskAsoahForm from "../components/AskAsoahForm";
import { CANDIDATE } from "../data/candidate";
import { TEAM } from "../data/team";
import { VALUES, PRIORITIES } from "../data/values";
import { HOSTELS, LOCATIONS } from "../data/locations";
import { EVENTS } from "../data/events";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-gold-deep dark:text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-display text-3xl text-ink dark:text-paper">{title}</h2>
      {description && <p className="mt-3 text-slate dark:text-paper/70">{description}</p>}
    </div>
  );
}

export default function Home() {
  const featuredHostels = HOSTELS.slice(0, 3);
  const featuredLocations = LOCATIONS.filter((l) => l.category !== "hostel").slice(0, 3);

  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionTitle eyebrow="About" title={`Meet ${CANDIDATE.name}`} />
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-slate dark:text-paper/75">
            {CANDIDATE.bio}
          </p>
          <div className="mt-6 text-center">
            <Link to="/about" className="link-sweep font-semibold text-ink dark:text-paper">
              Read more about Asoah →
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* Team Harambee identity */}
      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">{TEAM.name}</span>
            <h2 className="mt-2 font-display text-3xl">{TEAM.slogan}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-paper/70">{TEAM.meaning}</p>
            <p className="mx-auto mt-4 max-w-2xl text-paper/70">{TEAM.description}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Student-focused vision */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionTitle
            eyebrow="Vision"
            title="A platform built around students"
            description="Together We Move exists to make campus life at UMaT a little easier to
            navigate — from finding your way around, to being heard on the things that matter."
          />
        </SectionReveal>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionTitle eyebrow="What we stand for" title="Core Values" description="Proposed values guiding this platform." />
        </SectionReveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <SectionReveal key={v.id} delay={i * 60}>
              <ValueCard title={v.title} description={v.description} />
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Campus Guide teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionTitle
            eyebrow="Campus Guide"
            title="Find your way around UMaT"
            description="Search hostels, departments, libraries and more, then get walking directions with one tap."
          />
          <div className="mt-6 text-center">
            <Link
              to="/campus-guide"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-deep"
            >
              🧭 Open the Campus Guide
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-12">
          <h3 className="mb-4 font-display text-xl text-ink dark:text-paper">Featured Hostels</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHostels.map((h, i) => (
              <SectionReveal key={h.id} delay={i * 60}>
                <LocationCard location={h} />
              </SectionReveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-display text-xl text-ink dark:text-paper">Featured Campus Locations</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLocations.map((l, i) => (
              <SectionReveal key={l.id} delay={i * 60}>
                <LocationCard location={l} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student engagement */}
      <section className="bg-paper-dim py-20 dark:bg-ink-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionReveal>
            <h3 className="font-display text-2xl text-ink dark:text-paper">Student Feedback</h3>
            <p className="mt-2 text-sm text-slate dark:text-paper/70">
              Share a suggestion, question or issue you'd like discussed.
            </p>
            <div className="mt-6 rounded-2xl border border-mist bg-white p-6 dark:border-ink-soft dark:bg-ink">
              <FeedbackForm />
            </div>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h3 className="font-display text-2xl text-ink dark:text-paper">Ask Asoah</h3>
            <p className="mt-2 text-sm text-slate dark:text-paper/70">
              Submit a question directly.
            </p>
            <div className="mt-6 rounded-2xl border border-mist bg-white p-6 dark:border-ink-soft dark:bg-ink">
              <AskAsoahForm />
            </div>
          </SectionReveal>
        </div>
      </section>
      {/* Get in touch + social */}
      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionReveal>
            <h2 className="font-display text-3xl">Get in Touch</h2>
            <p className="mt-3 text-paper/70">
              Reach out with questions, ideas or feedback through the form,
              or directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton className="border-paper text-paper hover:text-ink" />
              <TiktokButton className="border-paper text-paper hover:text-ink" />
            </div>
          </SectionReveal>
          <SectionReveal delay={100} className="rounded-2xl bg-paper dark:bg-ink-soft p-6 text-ink dark:text-paper">
            <ContactForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

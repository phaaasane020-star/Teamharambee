import { Link } from "react-router-dom";
import { TEAM } from "../data/team";
import { SITE_CONFIG } from "../data/config";
import { tiktokLink, whatsappLink } from "../data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/80 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg text-paper">{TEAM.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-gold">
              {TEAM.slogan}
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              An independent, student-focused platform for campus information,
              navigation and engagement at UMaT.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-paper">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="link-sweep" to="/about">About</Link></li>
              <li><Link className="link-sweep" to="/campus-guide">Campus Guide</Link></li>
              <li><Link className="link-sweep" to="/services">Services</Link></li>
              <li><Link className="link-sweep" to="/events">Events</Link></li>
              <li><Link className="link-sweep" to="/updates">Updates</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-paper">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="link-sweep" to="/contact">Get in Touch</Link></li>
              <li>
                <a className="link-sweep" href="https://chat.whatsapp.com/D4GYf4xkmPNFEduWtd6Mi8?s=sw&p=i&mlu=4" target="_blank" rel="noopener noreferrer">
                   WhatsApp
                  </a>
              </li>
              <li>
              <a className="link-sweep" href="https://www.tiktok.com/@harambee02" target="_blank" rel="noopener noreferrer">
                 TikTok
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-paper">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="link-sweep" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="link-sweep" to="/terms">Terms</Link></li>
              <li><Link className="link-sweep" to="/accessibility">Accessibility Statement</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE_CONFIG.legalName}. This is an independent
            student-focused platform, not an official university website.
          </p>
          <a
            href="https://paatech-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep text-paper/70"
          >
            Powered by Paa Tech
          </a>
        </div>
      </div>
    </footer>
  );
}
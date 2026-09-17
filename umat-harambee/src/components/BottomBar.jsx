import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../data/config";
import { whatsappLink } from "../data/social";

export default function BottomBar() {
  if (!SITE_CONFIG.SHOW_MOBILE_BOTTOM_BAR) return null;

  const items = [
    { to: "/campus-guide", label: "Campus Guide", icon: "🧭" },
    { to: "/contact", label: "Get in Touch", icon: "✉️" },
    { href: "https://chat.whatsapp.com/D4GYf4xkmPNFEduWtd6Mi8?s=sw&p=i&mlu=4", label: "WhatsApp", icon: "💬", external: true },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-3 border-t border-mist bg-paper/95 backdrop-blur dark:border-ink-soft dark:bg-ink/95 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-ink dark:text-paper active:bg-gold/10"
          >
            <span aria-hidden="true" className="text-lg">{item.icon}</span>
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            to={item.to}
            className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-ink dark:text-paper active:bg-gold/10"
          >
            <span aria-hidden="true" className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}

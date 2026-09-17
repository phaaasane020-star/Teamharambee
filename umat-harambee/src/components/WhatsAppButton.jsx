import { whatsappLink } from "../data/social";

export default function WhatsAppButton({ message = "", className = "", children }) {
  return (
    <a
      href={"https://chat.whatsapp.com/D4GYf4xkmPNFEduWtd6Mi8?s=sw&p=i&mlu=4"}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-gold hover:bg-gold dark:border-paper dark:text-paper dark:hover:bg-gold dark:hover:text-ink dark:hover:border-gold ${className}`}
    >
      <span aria-hidden="true">💬</span>
      {children || "Chat on WhatsApp"}
    </a>
  );
}

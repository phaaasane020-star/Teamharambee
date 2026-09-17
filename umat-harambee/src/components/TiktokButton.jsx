import { tiktokLink } from "../data/social";

export default function TiktokButton({ className = "", children }) {
  return (
    <a
      href={"https://www.tiktok.com/@harambee02"}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-gold hover:bg-gold dark:border-paper dark:text-paper dark:hover:bg-gold dark:hover:text-ink dark:hover:border-gold ${className}`}
    >
      <span aria-hidden="true">🎵</span>
      {children || "Follow on TikTok"}
    </a>
  );
}
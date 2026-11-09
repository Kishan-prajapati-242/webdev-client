"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
  { label: "Home", id: "wd-home-link", href: "/labs" },
  { label: "Lab 1", id: "wd-lab1-link", href: "/labs/lab1" },
  { label: "Lab 2", id: "wd-lab2-link", href: "/labs/lab2" },
  { label: "Lab 3", id: "wd-lab3-link", href: "/labs/lab3" },
  { label: "Lab 4", id: "wd-lab4-link", href: "/labs/lab4" },
  { label: "Kambaz", id: "wd-kambaz-link", href: "/dashboard" },
  { label: "Book Ch3", id: "wd-book-ch3-link", href: "https://kambaz.dev/book/ch3", external: true },
  { label: "Book Ch4", id: "wd-book-ch4-link", href: "https://kambaz.dev/book/ch4", external: true },
];
export default function TOC() {
  const pathname = usePathname();
  return <nav id="wd-labs-toc" aria-label="Labs table of contents" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 7, padding: "14px 0" }}>
    {LINKS.map((link) => {
      const active = !link.external && (pathname === link.href || link.href.startsWith("/labs/lab") && pathname.startsWith(link.href + "/"));
      return <Link key={link.label} id={link.id} href={link.href} aria-current={active ? "page" : undefined}
        target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}
        style={{ padding: "8px 12px", borderRadius: 20, border: "1px solid #cbd5e1", textDecoration: "none", background: active ? "#b71e26" : "#fff", color: active ? "#fff" : "#334155", fontWeight: active ? 700 : 400, fontSize: 13 }}>{link.label}</Link>;
    })}
  </nav>;
}

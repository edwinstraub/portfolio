"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "about" },
  { href: "/cv", label: "cv" },
  { href: "/blog", label: "writing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        position: "sticky",
        top: 0,
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(12px)",
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "1.2rem",
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Edwin Straub
      </Link>

      <nav style={{ display: "flex", gap: "2rem" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:
                pathname === link.href ? "var(--accent)" : "var(--muted)",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

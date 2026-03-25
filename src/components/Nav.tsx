"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "1.25rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        position: "sticky",
        top: 0,
        background: "rgba(250, 250, 247, 0.92)",
        backdropFilter: "blur(12px)",
        zIndex: 50,
        maxWidth: "100%",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "1.3rem",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: "var(--text)",
          textDecoration: "none",
        }}
      >
        Edwin Straub
      </Link>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "baseline" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color:
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "var(--accent)"
                  : "var(--muted)",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

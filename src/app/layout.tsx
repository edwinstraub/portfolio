import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Edwin Straub",
  description: "Lead Software Engineer. Father. Maker of Things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <footer
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "3rem 2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "var(--muted)",
            }}
          >
            Edwin Straub · Satu Mare, Romania
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://github.com/edwinstraub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/edwin-straub-805a994"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:edwin@edwinstraub.dev"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              Email
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

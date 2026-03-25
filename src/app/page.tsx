import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "6rem 2rem",
      }}
    >
      {/* Hero */}
      <div style={{ marginBottom: "5rem" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
          }}
        >
          Platform Engineer · Satu Mare, Romania
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            color: "var(--text)",
          }}
        >
          Building systems
          <br />
          <span style={{ color: "var(--muted)" }}>that last.</span>
        </h1>

        <div
          style={{
            maxWidth: "55ch",
            color: "#a09880",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: "1.2rem" }}>
            I'm Edwin — a software engineer with over 15 years of experience,
            primarily in backend development with Java and, for the past four
            years, platform engineering.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            I build the infrastructure, tooling, and internal platforms that
            help engineering teams move faster and sleep better at night.
          </p>
          <p>
            This is where I share what I'm thinking about, working on, and
            learning.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          marginBottom: "4rem",
        }}
      />

      {/* Quick links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {[
          {
            href: "/cv",
            label: "Curriculum Vitae",
            desc: "Experience, skills & education",
          },
          {
            href: "/blog",
            label: "Writing",
            desc: "Notes, essays & journal entries",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="card-link"
            style={{
              display: "block",
              padding: "2rem",
              background: "var(--bg)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              {item.label} →
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted)" }}>
              {item.desc}
            </div>
          </Link>
        ))}
      </div>

      {/* Currently */}
      <div style={{ marginTop: "5rem" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "1.5rem",
          }}
        >
          Currently
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Role", value: "Platform Engineer" },
            { label: "Stack", value: "Kubernetes, Java, Terraform, Go" },
            { label: "Interests", value: "Developer experience, observability, distributed systems" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "1rem",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--muted)" }}>{item.label}</span>
              <span style={{ color: "#c0b8a8" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "CV — Edwin Straub",
};

const experience = [
  {
    company: "Your Current Company",
    role: "Platform Engineer",
    period: "2021 — Present",
    description:
      "Building and maintaining internal developer platforms, CI/CD pipelines, and cloud infrastructure. Driving adoption of Kubernetes across engineering teams.",
    tags: ["Kubernetes", "Terraform", "Go", "AWS"],
  },
  {
    company: "Previous Company",
    role: "Senior Backend Engineer",
    period: "2016 — 2021",
    description:
      "Led backend development for core product services. Designed and implemented microservices architecture migrated from a Java monolith.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
  },
  {
    company: "Earlier Company",
    role: "Backend Engineer",
    period: "2012 — 2016",
    description:
      "Full-stack development with a focus on backend systems. Built REST APIs and internal tooling used across the organization.",
    tags: ["Java", "Angular", "MySQL"],
  },
  {
    company: "First Company",
    role: "Junior Developer",
    period: "2008 — 2012",
    description:
      "Started career building enterprise Java applications. Gained deep knowledge of JVM internals and enterprise patterns.",
    tags: ["Java EE", "Oracle DB", "SOAP"],
  },
];

const skills = {
  "Languages": ["Java", "Go", "TypeScript", "Python", "Bash"],
  "Infrastructure": ["Kubernetes", "Terraform", "Helm", "Docker", "Ansible"],
  "Cloud": ["AWS", "GCP", "Hetzner"],
  "Observability": ["Prometheus", "Grafana", "OpenTelemetry", "Loki"],
  "Frontend (occasional)": ["React", "Angular", "Next.js"],
};

export default function CV() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "5rem 2rem" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "4rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "3.5rem",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            Edwin Straub
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>
            Platform Engineer · Satu Mare, Romania
          </p>
        </div>
        <div style={{ textAlign: "right", fontSize: "12px", color: "var(--muted)" }}>
          <div>your@email.com</div>
          <div>github.com/edwinstraub</div>
          <div>linkedin.com/in/edwinstraub</div>
        </div>
      </div>

      {/* Experience */}
      <Section title="Experience">
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experience.map((job) => (
            <div key={job.company}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.5rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                    }}
                  >
                    {job.role}
                  </span>
                  <span style={{ color: "var(--muted)", margin: "0 0.75rem" }}>
                    ·
                  </span>
                  <span style={{ color: "var(--accent)", fontSize: "13px" }}>
                    {job.company}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "var(--muted)",
                  }}
                >
                  {job.period}
                </span>
              </div>
              <p
                style={{
                  color: "#a09880",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                  maxWidth: "60ch",
                }}
              >
                {job.description}
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "0.2rem 0.6rem",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "1rem",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--muted)" }}>{category}</span>
              <span style={{ color: "#c0b8a8" }}>{items.join(", ")}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.2rem",
              }}
            >
              Your University
            </span>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>
              2004 — 2008
            </span>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>
            B.Sc. Computer Science
          </p>
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {title}
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "var(--border)",
          }}
        />
      </div>
      {children}
    </div>
  );
}

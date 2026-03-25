import Image from "next/image";

export default function Home() {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>
      {/* Hero */}
      <section className="stagger-1" style={{ marginBottom: "5rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}
        >
          Edwin Straub
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "var(--muted)",
            fontWeight: 400,
            letterSpacing: "0.01em",
            marginBottom: "2rem",
          }}
        >
          Lead Software Engineer &middot; Father &middot; Maker of Things
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            maxWidth: "58ch",
          }}
        >
          I&apos;m a father of two, a software engineer of seventeen years, and someone
          who fell in love with computers because of video games. I build things for
          a living, but family is what I build my life around.
        </p>
      </section>

      {/* Profile photo */}
      <section className="stagger-2" style={{ marginBottom: "5rem" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "360px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/profile-picture.jpg"
            alt="Edwin Straub"
            width={720}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "5rem" }} />

      {/* Who I Am */}
      <section className="stagger-3" style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
            marginBottom: "2rem",
          }}
        >
          Who I Am
        </h2>
        <div
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <p>
            Before anything else, I&apos;m a dad. I have a boy and a girl, and they are
            the best thing I&apos;ve ever been part of. My wife and I are raising them in
            Satu Mare, Romania, where I grew up speaking Hungarian, Romanian, and
            eventually German and English. Family is where everything starts for me.
          </p>
          <p>
            I got into computers because of games. As a kid, I wanted to understand how
            they worked &mdash; not just play them, but peek behind the curtain. That
            curiosity led me to a Computer Science degree at Babe&#x219;-Bolyai University
            in Cluj-Napoca, and then into a career that has now spanned over seventeen years.
          </p>
          <p>
            For fourteen of those years, I worked at TBA Group, building simulation software
            for maritime container terminals. We designed driving behavior algorithms for
            automated equipment &mdash; trucks navigating yards, cranes moving containers,
            all modeled in software so terminal operators could test, train, and optimize
            without touching a real port. I still have a deep soft spot for that world:
            logistics, large-scale simulations, the beautiful complexity of real systems
            modeled in code.
          </p>
          <p>
            Along the way, I built a predictive maintenance system using machine learning
            to anticipate equipment failures before they happened, which led to
            a <a href="https://ieeexplore.ieee.org/document/10015520" target="_blank" rel="noopener noreferrer">published IEEE paper</a>.
            I also designed APIs for standardizing terminal operating system data and mentored
            interns and junior developers &mdash; which turned out to be one of the most
            rewarding parts of the job.
          </p>
          <p>
            After TBA, I spent a year at Thales working on video management systems for
            critical infrastructure &mdash; safety monitoring for trains and stations.
            Then I joined adesso insurance solutions, where I built a cloud-native
            internal developer platform using Kubernetes, Quarkus, and Angular.
            I really enjoyed my time there and met some truly good people. Since late
            2025, I&apos;ve been the Lead Developer on an internal developer platform
            at a major German retail company, which I&apos;m enjoying very much. I also
            serve as the Lead for the Java Competence Center at adesso Romania.
          </p>
          <p>
            What drives me professionally is craft. I care about clean, maintainable code.
            I care about architecture that makes systems comprehensible, not just functional.
            I enjoy working with people &mdash; helping companies create products that are
            genuinely useful and built to last. Hiring, mentoring, code reviews, breaking
            big problems into small ones &mdash; that&apos;s where I feel most at home.
          </p>
          <p>
            Outside of work, I love spending time with my family &mdash; that always comes
            first. I enjoy playing football when I can, losing myself in a good book,
            picking up the guitar, and reading about astronomy. I&apos;m what you might
            call an armchair astronomer these days &mdash; more reading than actual
            observing, though I do own a telescope that deserves more outings.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "5rem" }} />

      {/* What I've Built */}
      <section className="stagger-4" style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
            marginBottom: "2.5rem",
          }}
        >
          What I&apos;ve Built
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <JourneyItem
            period="2025 &ndash; present"
            title="Internal Developer Platform · Lead Developer"
            org="adesso (major German retail client)"
            description="Leading the development of an internal developer platform at a major German retail company. Also serving as Lead for the Java Competence Center at adesso Romania."
          />
          <JourneyItem
            period="2023 &ndash; 2025"
            title="Cloud-Native Developer Platform"
            org="adesso insurance solutions"
            description="Built an internal developer platform on Kubernetes, Quarkus, and Angular. Conducted technical interviews, mentored developers, created CI/CD pipelines, and wrote Kubernetes operators."
          />
          <JourneyItem
            period="2022 &ndash; 2023"
            title="Video Management for Critical Infrastructure"
            org="Thales"
            description="Backend and frontend development for video analytics systems used in transportation safety — monitoring passenger density and operational hazards across rail networks."
          />
          <JourneyItem
            period="2008 &ndash; 2022"
            title="Maritime Terminal Simulations"
            org="TBA Group"
            description="Fourteen years designing and building simulation software for container terminals. Driving behavior algorithms, virtual terminals for testing, container yard optimization, and predictive maintenance using machine learning."
          />
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "5rem" }} />

      {/* Skills */}
      <section className="stagger-5" style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
            marginBottom: "2.5rem",
          }}
        >
          Tools &amp; Technologies
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          <SkillGroup
            label="Languages"
            items={["Java (8/11/17)", "TypeScript", "Python", "Angular"]}
          />
          <SkillGroup
            label="Platforms"
            items={["Kubernetes (OpenShift, Rancher)", "Docker", "Helm"]}
          />
          <SkillGroup
            label="Frameworks"
            items={["Quarkus", "Spring Boot", "Angular", "Quarkus Panache"]}
          />
          <SkillGroup
            label="Data"
            items={["PostgreSQL", "MySQL", "MariaDB", "Redis", "Kafka", "ActiveMQ"]}
          />
          <SkillGroup
            label="DevOps"
            items={["GitLab CI/CD", "Jenkins", "Tekton", "Ansible"]}
          />
          <SkillGroup
            label="Other"
            items={["Simulation", "Machine Learning", "PyTorch", "Pandas"]}
          />
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "5rem" }} />

      {/* Languages */}
      <section className="stagger-6" style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
            marginBottom: "2rem",
          }}
        >
          Languages
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <LangRow language="Hungarian" level="Native" />
          <LangRow language="Romanian" level="Business fluent" />
          <LangRow language="German" level="Business fluent" />
          <LangRow language="English" level="Business fluent" />
        </div>
      </section>
    </div>
  );
}

function JourneyItem({
  period,
  title,
  org,
  description,
}: {
  period: string;
  title: string;
  org: string;
  description: string;
}) {
  return (
    <div>
      <span
        style={{
          fontSize: "13px",
          color: "var(--muted)",
          fontFamily: "var(--font-mono), monospace",
          display: "block",
          marginBottom: "0.4rem",
        }}
        dangerouslySetInnerHTML={{ __html: period }}
      />
      <h3
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "1.25rem",
          fontWeight: 400,
          color: "var(--text)",
          marginBottom: "0.2rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <span
        style={{
          fontSize: "14px",
          color: "var(--accent)",
          display: "block",
          marginBottom: "0.6rem",
        }}
      >
        {org}
      </span>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          maxWidth: "60ch",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--muted)",
          marginBottom: "0.75rem",
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        {label}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              padding: "0.25rem 0",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LangRow({ language, level }: { language: string; level: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "0.5rem 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span style={{ fontSize: "15px", color: "var(--text)" }}>{language}</span>
      <span style={{ fontSize: "13px", color: "var(--muted)" }}>{level}</span>
    </div>
  );
}

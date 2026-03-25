You are redesigning a personal portfolio website for Edwin Straub — a Lead Software Engineer, 
father of two, and lifelong technology enthusiast based in Satu Mare, Romania. The site is built 
with Next.js 16 (App Router, TypeScript) and Tailwind CSS. Redesign the entire site with the 
following constraints.

---

### Design Philosophy

Clean, minimal, optimistic, and professional. This is NOT a dark hacker aesthetic — it should 
feel warm, approachable, and human. Think: a well-curated personal space that reflects someone 
who values clarity, craftsmanship, and family. The design should feel like a handwritten letter 
on quality paper, not a corporate dashboard.

---

### Color & Theme

<color_direction>
Light, warm palette. Think natural light on a clean desk.
- Background: warm off-white / cream (e.g. #FAFAF7 or #F5F1EB)
- Primary text: deep warm charcoal (e.g. #2C2C2C or #3A3632)
- Muted text: warm grey (e.g. #8C8578)
- Accent: muted teal or warm slate blue (e.g. #4A7C72 or #5B7B8A) — professional but not cold
- Secondary accent: warm gold/amber for subtle highlights (e.g. #C4973B)
- Borders/dividers: very subtle warm grey (e.g. #E8E4DE)

Use CSS variables for all colors. Commit to the palette — dominant warm neutrals with 
the teal/blue accent used sparingly for links, highlights, and interactive elements. 
Do NOT use purple gradients, neon colors, or generic blue-on-white corporate schemes.
</color_direction>

---

### Typography

<typography>
Choose distinctive, beautiful fonts loaded from Google Fonts.

- Display / headings: Use a refined serif like **Fraunces** or **Newsreader** — 
  something with personality and warmth, NOT generic sans-serif
- Body text: Use a clean, readable sans like **Source Sans 3** or **IBM Plex Sans** — 
  legible at small sizes, professional but not boring
- Code / monospace accents (if used for tags or metadata): **JetBrains Mono**

Use weight extremes: light (300) for large display text, bold (700-800) for emphasis. 
Size jumps should be dramatic — headings at 2.5x-3x body size minimum. 
Give text generous line-height (1.6-1.8 for body) and letter-spacing.

NEVER use: Inter, Roboto, Open Sans, Arial, or system default fonts.
</typography>

---

### Layout & Spacing

<layout>
Generous whitespace everywhere. Content should breathe.
- Max content width: ~720px for text (comfortable reading measure)
- Sections separated by ample vertical space (80-120px)
- Use a simple, centered single-column layout for most content
- Navigation: minimal top nav — name on left, links on right, no hamburger menu on desktop
- Mobile: clean responsive stack, navigation collapses gracefully

Avoid: cramped layouts, grid-heavy dashboards, card-soup, or overly complex component patterns.
</layout>

---

### Motion & Interaction

<motion>
Subtle, purposeful animations only.
- Gentle fade-in on page load for main content (staggered with animation-delay)
- Smooth hover transitions on links and interactive elements (200-300ms ease)
- No bouncing, no parallax, no scroll-jacking, no particle effects
- CSS-only animations preferred. Keep it understated and elegant.
</motion>

---

### Background & Atmosphere

<background>
Clean and simple. A very subtle warm gradient or a faint paper-like texture is acceptable.
No geometric patterns, no mesh gradients, no glassmorphism. Let the whitespace 
and typography create the atmosphere.
</background>

---

### Site Structure & Content

The site has these pages/sections:

#### 1. Homepage (/)
The main landing page. This is the heart of the site.

**Hero section:**
- Edwin's name in large display type
- Subtitle: "Lead Software Engineer · Father · Maker of Things"
- A short, warm 2-3 sentence intro that captures who Edwin is: a family man first, 
  a software engineer who cares about craft, someone who got into computers through 
  a love of games and never looked back.

**Photo section:**
- A prominent placeholder area for a personal photo (e.g., a styled empty box with 
  a subtle icon or text "Photo coming soon") — designed to hold a real photo later. 
  Make it a natural, integral part of the page, not an afterthought.

**About section — "Who I Am":**
Write this content. Edwin is:
- A father of two — a boy and a girl. Family comes first. This should be mentioned 
  prominently and warmly, not as a footnote.
- Based in Satu Mare, Romania
- Got into computer science because of games as a kid — this sparked a lifelong 
  passion for how software works under the hood
- Spent 14 years at TBA Group in the Netherlands building simulation software for 
  maritime container terminals — designing driving behavior algorithms for terminal 
  equipment, building virtual terminals for testing, predictive maintenance with ML. 
  He still has a deep affection for this domain — logistics, simulations, the 
  complexity of real-world systems modeled in software.
- Now a Lead Software Engineer at adesso insurance solutions, building cloud-native 
  internal developer platforms with Kubernetes, Quarkus, and Angular
- Previously worked at Thales on video management systems for critical infrastructure
- Published a paper: "Predictive Maintenance Powered by Machine Learning and Simulation" 
  (IEEE, 2023)
- Values: clean code, maintainability, software architecture, helping teams build 
  things that matter
- Enjoys working with people — mentoring junior developers, conducting interviews, 
  coaching teams
- Personal interests: astronomy (the universe is endlessly fascinating), playing guitar, 
  reading books

Write in first person. Warm, genuine tone — not corporate bio-speak. Let personality show.

**Professional journey section — "What I've Built":**
A concise, curated timeline or list of key career highlights (not a full CV dump):
- 14 years building maritime terminal simulations (TBA Group, 2008-2022) — driving 
  algorithms, virtual terminals, predictive maintenance
- Video management for critical infrastructure (Thales, 2022-2023)
- Cloud-native developer platforms (adesso, 2023-present)
- Mention: Java ecosystem (Quarkus, Spring Boot), Kubernetes, Angular, Python/ML, 
  Docker, CI/CD

**Skills section:**
Show core technical competencies in a clean, minimal way. Group by category:
- Languages: Java (8/11/17), TypeScript, Python, Angular
- Platforms: Kubernetes (OpenShift, Rancher), Docker, Helm
- Frameworks: Quarkus, Spring Boot, Angular
- Data: PostgreSQL, MySQL, MariaDB, Redis, Kafka, ActiveMQ
- DevOps: GitLab CI/CD, Jenkins, Tekton, Ansible
- Other: Simulation, Machine Learning (PyTorch, Pandas, NumPy)

Don't make it a massive wall of badges. Clean grouped lists or a subtle grid.

**Languages section:**
Hungarian (native), Romanian (business fluent), German (business fluent), English (business fluent)
— Edwin is multilingual, present this as a strength.

#### 2. Blog page (/blog)
- Clean list of blog posts with title, date, short description, and tags
- Placeholder state: show a friendly message like "Posts coming soon — stay tuned." 
  with perhaps one example/welcome post
- Design the post list and individual post layout (/blog/[slug]) for beautiful 
  long-form reading — generous margins, proper heading hierarchy, code blocks styled well

#### 3. Navigation
- Minimal top navigation: "Edwin Straub" (links home) on left, "Blog" link on right
- Consider a subtle "Contact" or social links area (GitHub, LinkedIn, Email) 
  in the footer or nav

---

### Technical Requirements
- Next.js 16 App Router with TypeScript
- Tailwind CSS for styling (use @theme for design tokens in globals.css)
- Blog powered by MDX files (using next-mdx-remote and gray-matter), 
  stored in content/posts/
- Google Fonts loaded via next/font/google
- All pages must be server components where possible, client components only when needed
- Responsive design — looks great on mobile, tablet, and desktop
- Accessible (proper heading hierarchy, alt text placeholders, good contrast ratios)

### File structure to maintain:
src/app/layout.tsx — root layout, fonts, nav
src/app/globals.css — design system
src/app/page.tsx — homepage
src/app/blog/page.tsx — blog index
src/app/blog/[slug]/page.tsx — individual post
src/components/Nav.tsx — navigation
src/lib/posts.ts — MDX utilities
content/posts/*.mdx — blog posts

---

### What to AVOID
- Dark themes or dark backgrounds
- Generic "developer portfolio" templates
- Card-heavy layouts with shadows and rounded corners everywhere
- Purple/blue gradient hero sections
- Overly technical or cold aesthetics
- Corporate buzzword-heavy copy
- Emoji overuse
- Particle effects, 3D, or heavy JavaScript animations
- Stock photo placeholders
- The word "passionate" — show it, don't say it

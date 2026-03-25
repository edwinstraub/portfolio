# CLAUDE.md — Portfolio Project

## Project Overview
Personal portfolio site for Edwin Straub — platform engineer based in Satu Mare, Romania.
Serves as bio, CV, and blog/journal.

## Infrastructure
- **Server**: Hetzner CX22 VPS (2 vCPU, 4GB RAM, Ubuntu 22.04)
  - IP: `195.201.25.12`
- **PaaS**: Coolify v4 (self-hosted, running on the same server)
  - Accessible at: `http://195.201.25.12:8000`
- **Reverse proxy**: Traefik (managed by Coolify)
- **Domain**: `edwinstraub.dev` (registered on Cloudflare)
  - DNS: A records pointing to `195.201.25.12`, DNS-only (no Cloudflare proxy)
  - SSL: Let's Encrypt via Coolify/Traefik

## Deployment Flow
- GitHub repo: `github.com/edwinstraub/portfolio`
- GitHub App connected to Coolify for auto-deploy on push
- Push to `main` → Coolify pulls, builds with Nixpacks, deploys automatically
- Build time: ~90 seconds

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS + inline styles with CSS variables
- **Blog**: MDX files via `next-mdx-remote`, parsed with `gray-matter`
- **Fonts**: Cormorant Garamond (display) + JetBrains Mono (body)

## Project Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, Nav
│   │   ├── globals.css       # Design system, CSS variables
│   │   ├── page.tsx          # Homepage / bio
│   │   ├── cv/
│   │   │   └── page.tsx      # CV page
│   │   └── blog/
│   │       ├── page.tsx      # Blog index (lists all posts)
│   │       └── [slug]/
│   │           └── page.tsx  # Individual post page
│   ├── components/
│   │   └── Nav.tsx           # Navigation (Client Component)
│   └── lib/
│       └── posts.ts          # MDX file reader utilities
└── content/
    └── posts/
        └── *.mdx             # Blog posts (frontmatter: title, date, description, tags)
```

## Design System
CSS variables defined in `globals.css`:
- `--bg`: `#080808` (near black background)
- `--text`: `#e8e0d0` (warm white)
- `--muted`: `#7a7060` (muted brown-grey)
- `--accent`: `#c8a96e` (warm gold)
- `--border`: `#1e1e1e` (subtle border)
- `--font-display`: Cormorant Garamond (serif, for headings)
- `--font-mono`: JetBrains Mono (for body text)

## Writing a New Blog Post
Create a new file in `content/posts/my-post-slug.mdx`:
```mdx
---
title: "Post Title"
date: "2026-03-25"
description: "Short description shown in the post list"
tags: ["tag1", "tag2"]
---

Post content in markdown...
```
Then `git push` — it deploys automatically.

## Key Dependencies
```json
"gray-matter": "for parsing MDX frontmatter",
"next-mdx-remote": "for rendering MDX content"
```

## Local Development
```bash
cd portfolio
npm run dev
# → http://localhost:3000
```

## SSH Access
```bash
ssh root@195.201.25.12
```

## TODO / Next Steps
- [ ] Fill in real bio content in `src/app/page.tsx`
- [ ] Fill in real CV data in `src/app/cv/page.tsx`
- [ ] Add real email/GitHub/LinkedIn links in CV page
- [ ] Consider adding an RSS feed for the blog
- [ ] Consider adding OG image generation for blog posts

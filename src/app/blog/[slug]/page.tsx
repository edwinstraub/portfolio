import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Edwin Straub` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>
      {/* Back */}
      <Link
        href="/blog"
        className="stagger-1"
        style={{
          fontSize: "13px",
          color: "var(--muted)",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          marginBottom: "3rem",
          textDecoration: "none",
          transition: "color 0.2s",
        }}
      >
        &larr; Back to blog
      </Link>

      {/* Post header */}
      <div className="stagger-1" style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            fontFamily: "var(--font-mono), monospace",
            marginBottom: "1rem",
          }}
        >
          {formatDate(post.date)}
          {post.tags && post.tags.length > 0 && (
            <>
              <span style={{ margin: "0 0.75rem", color: "var(--border-strong)" }}>&middot;</span>
              <span>{post.tags.join(", ")}</span>
            </>
          )}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          {post.title}
        </h1>

        {post.description && (
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            {post.description}
          </p>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          marginBottom: "2.5rem",
        }}
      />

      {/* Content */}
      <article className="prose stagger-2">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Edwin Straub` };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "5rem 2rem" }}>
      {/* Back */}
      <Link
        href="/blog"
        className="back-link"
        style={{
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "3rem",
        }}
      >
        ← Writing
      </Link>

      {/* Post header */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "1rem",
          }}
        >
          {formatDate(post.date)}
          {post.tags && post.tags.length > 0 && (
            <>
              <span style={{ margin: "0 0.75rem" }}>·</span>
              {post.tags.join(", ")}
            </>
          )}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
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
              fontSize: "1rem",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
            }}
          >
            {post.description}
          </p>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          marginBottom: "3rem",
        }}
      />

      {/* Content */}
      <article className="prose">
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

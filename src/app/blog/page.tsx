import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Edwin Straub",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>
      <div className="stagger-1" style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "0.75rem",
          }}
        >
          Blog
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7 }}>
          Notes on software, engineering, and the things I&apos;m learning along the way.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          className="stagger-2"
          style={{
            padding: "3rem 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--muted)",
              fontSize: "16px",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
            }}
          >
            Posts coming soon &mdash; stay tuned.
          </p>
        </div>
      ) : (
        <div
          className="stagger-2"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                padding: "1.75rem 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {formatDate(post.date)}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </span>
                {post.description && (
                  <span
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.description}
                  </span>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          padding: "0.2rem 0.6rem",
                          background: "var(--bg-subtle)",
                          border: "1px solid var(--border)",
                          borderRadius: "3px",
                          color: "var(--muted)",
                          letterSpacing: "0.04em",
                          fontFamily: "var(--font-mono), monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing — Edwin Straub",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "5rem 2rem" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          Writing
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "3rem",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Notes & Essays
        </h1>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: "var(--muted)", fontSize: "13px" }}>
          No posts yet. Coming soon.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid var(--border)",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="post-link"
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: "2rem",
                padding: "1.75rem 0",
                borderBottom: "1px solid var(--border)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  letterSpacing: "0.05em",
                  paddingTop: "0.2rem",
                }}
              >
                {formatDate(post.date)}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    marginBottom: "0.3rem",
                    color: "var(--text)",
                  }}
                >
                  {post.title}
                </div>
                {post.description && (
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                    {post.description}
                  </div>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "10px",
                          padding: "0.15rem 0.5rem",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
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
  });
}

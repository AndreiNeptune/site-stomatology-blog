import Link from "next/link";
import { Post } from "@/lib/sanity/types";

interface RecentProceduresSidebarProps {
  posts: Post[];
  locale?: "ro" | "en";
}

export default function RecentProceduresSidebar({ posts, locale = "ro" }: RecentProceduresSidebarProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="w-full" id="recent-procedures-sidebar">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary-400 to-primary-600" />
        <h3 className="text-lg font-bold text-neutral-800">
          {locale === "ro" ? "Proceduri Recente" : "Recent Procedures"}
        </h3>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post, i) => {
          const title = locale === "en" && post.titleEn ? post.titleEn : post.title;
          const imageUrl = post.mainImage
            ? urlFor(post.mainImage).width(120).height(80).url()
            : null;
          const formattedDate = post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString(locale === "ro" ? "ro-RO" : "en-US", {
                day: "2-digit",
                month: "short",
              })
            : "";

          return (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group flex gap-3 p-3 rounded-2xl hover:bg-primary-50/50 transition-all duration-300"
              id={`recent-procedure-${i}`}
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="80px"
                  />
                ) : (
                  <div className="w-full h-full gradient-hero flex items-center justify-center">
                    <span className="text-lg">🦷</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                  {title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  {post.categories?.[0] && (
                    <span className="text-xs text-primary-500 font-medium">
                      {post.categories[0].icon} {locale === "en" && post.categories[0].titleEn ? post.categories[0].titleEn : post.categories[0].title}
                    </span>
                  )}
                  {formattedDate && (
                    <span className="text-xs text-neutral-400">
                      · {formattedDate}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All */}
      <Link
        href="/blog"
        className="flex items-center justify-center gap-2 mt-6 py-3 rounded-xl border border-primary-100 text-sm font-semibold text-primary-500 hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 group"
      >
        {locale === "ro" ? "Vezi toate articolele" : "View all articles"}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </aside>
  );
}

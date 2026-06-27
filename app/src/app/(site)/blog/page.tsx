import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";

export const revalidate = 60; // Revalidate every 60 seconds
import {
  postsQuery,
  recentProceduresQuery,
  categoriesQuery,
} from "@/lib/sanity/queries";
import BlogClientPage from "@/components/blog/BlogClientPage";

export const metadata: Metadata = {
  title: "Blog | Dr. Bianca Ionescu — Articole despre Proceduri Stomatologice",
  description:
    "Descoperiți cele mai noi articole despre proceduri stomatologice, sfaturi pentru sănătatea orală, estetica dentară și tratamente moderne. Blog de specialitate Dr. Bianca Ionescu.",
  openGraph: {
    title: "Blog | Dr. Bianca Ionescu",
    description:
      "Articole despre proceduri stomatologice și sănătatea orală scrise de medicii noștri specialiști.",
    type: "website",
  },
};

export default async function BlogPage() {
  const [posts, recentProcedures, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(recentProceduresQuery),
    client.fetch(categoriesQuery),
  ]);

  // console.log(`[Blog Build] Fetched: ${posts?.length || 0} posts, ${recentProcedures?.length || 0} procedures, ${categories?.length || 0} categories`);
  // if (posts?.length > 0) {
  //   console.log(`[Blog Build] First post title: ${posts[0].title}`);
  // }

  return (
    <section className="min-h-screen pt-32 pb-20" id="blog-page">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6">
            <span className="animate-sparkle">✨</span>
            Blog Dr. Bianca Ionescu
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Articole &{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Proceduri
            </span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Informații utile despre cele mai noi tratamente stomatologice, sfaturi
            pentru sănătatea orală și noutăți din clinica noastră.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <BlogClientPage
        initialPosts={posts || []}
        recentProcedures={recentProcedures || []}
        categories={categories || []}
        locale="ro"
      />
    </section>
  );
}

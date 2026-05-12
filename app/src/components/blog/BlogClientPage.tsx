"use client";

import { useEffect, useState, useMemo } from "react";
import PostCard from "@/components/blog/PostCard";
import BlogSearchBar from "@/components/blog/BlogSearchBar";
import RecentProceduresSidebar from "@/components/blog/RecentProceduresSidebar";
import { Post, Category } from "@/lib/sanity/types";

interface BlogClientPageProps {
  initialPosts: Post[];
  recentProcedures: Post[];
  categories: Category[];
  locale?: "ro" | "en";
}

export default function BlogClientPage({
  initialPosts,
  recentProcedures,
  categories,
  locale = "ro",
}: BlogClientPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTreatment, setActiveTreatment] = useState("all");

  const filteredPosts = useMemo(() => {
    let result = initialPosts;

    // Filter by treatment type
    if (activeTreatment !== "all") {
      result = result.filter((post: Post) =>
        post.categories?.some((cat: Category) => cat.treatmentType === activeTreatment)
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (post: Post) =>
          post.title?.toLowerCase().includes(term) ||
          post.titleEn?.toLowerCase().includes(term) ||
          post.excerpt?.toLowerCase().includes(term) ||
          post.excerptEn?.toLowerCase().includes(term) ||
          post.author?.name?.toLowerCase().includes(term) ||
          post.categories?.some(
            (cat: Category) =>
              cat.title?.toLowerCase().includes(term) ||
              cat.titleEn?.toLowerCase().includes(term)
          )
      );
    }

    return result;
  }, [initialPosts, searchTerm, activeTreatment]);

  const featuredPosts = filteredPosts.filter((p: Post) => p.featured);
  const regularPosts = filteredPosts.filter((p: Post) => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="mb-10">
        <BlogSearchBar
          onSearch={setSearchTerm}
          onFilterTreatment={setActiveTreatment}
          activeTreatment={activeTreatment}
          locale={locale}
        />
      </div>

      {/* Main Content + Sidebar */}
      {filteredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-white/50 backdrop-blur-sm rounded-3xl border border-primary-100/50 shadow-soft">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary-200 blur-3xl opacity-20 rounded-full animate-pulse" />
            <span className="relative text-6xl block">🔍</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-neutral-800 mb-3">
            {locale === "ro" ? "Niciun articol găsit" : "No articles found"}
          </h3>
          <p className="text-neutral-500 max-w-sm text-center mb-8">
            {locale === "ro"
              ? "Nu am găsit articole care să corespundă căutării tale. Încearcă alte cuvinte cheie sau resetează filtrele."
              : "We couldn't find any articles matching your search. Try different keywords or reset filters."}
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveTreatment("all");
            }}
            className="px-8 py-3 rounded-full bg-primary-50 text-primary-600 font-semibold hover:bg-primary-100 transition-colors"
          >
            {locale === "ro" ? "Resetează filtrele" : "Reset filters"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Posts Grid */}
          <div className="flex-1 min-w-0">
            <>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && !searchTerm && activeTreatment === "all" && (
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredPosts.map((post: Post) => (
                      <PostCard key={post._id} post={post} featured locale={locale} />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {(searchTerm || activeTreatment !== "all" ? filteredPosts : regularPosts).map(
                  (post: Post) => (
                    <PostCard key={post._id} post={post} locale={locale} />
                  )
                )}
              </div>
            </>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <RecentProceduresSidebar posts={recentProcedures} locale={locale} />

              {/* Categories */}
              {categories && categories.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-accent-400 to-accent-600" />
                    <h3 className="text-lg font-bold text-neutral-800">
                      {locale === "ro" ? "Categorii" : "Categories"}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat: Category) => (
                      <button
                        key={cat._id}
                        onClick={() => {
                          setActiveTreatment(cat.treatmentType || "all");
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-primary-100 text-neutral-600 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                        id={`sidebar-cat-${cat._id}`}
                      >
                        {cat.icon && <span>{cat.icon}</span>}
                        {locale === "en" && cat.titleEn ? cat.titleEn : cat.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


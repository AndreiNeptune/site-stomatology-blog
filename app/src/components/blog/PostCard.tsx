import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/sanity/types";

interface PostCardProps {
  post: Post;
  featured?: boolean;
  locale?: "ro" | "en";
}

export default function PostCard({ post, featured = false, locale = "ro" }: PostCardProps) {
  const title = locale === "en" && post.titleEn ? post.titleEn : post.title;
  const excerpt = locale === "en" && post.excerptEn ? post.excerptEn : post.excerpt;
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(featured ? 800 : 600).height(featured ? 450 : 340).url()
    : null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(locale === "ro" ? "ro-RO" : "en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className={cn(
        "group block rounded-3xl overflow-hidden bg-white border border-primary-100/50 transition-all duration-500",
        "hover:shadow-card hover:border-primary-200 hover:-translate-y-1",
        featured && "md:col-span-2 md:grid md:grid-cols-2"
      )}
      id={`post-card-${post._id}`}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", featured ? "h-64 md:h-full" : "h-52")}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div className="w-full h-full gradient-hero flex items-center justify-center">
            <span className="text-5xl">🦷</span>
          </div>
        )}
        {/* Category badges */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat._id}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary-700 shadow-sm"
              >
                {cat.icon && <span>{cat.icon}</span>}
                {locale === "en" && cat.titleEn ? cat.titleEn : cat.title}
              </span>
            ))}
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={cn("p-6", featured && "flex flex-col justify-center")}>
        {/* Author */}
        {post.author && (
          <div className="flex items-center gap-3 mb-3">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).width(40).height(40).url()}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full ring-2 ring-primary-100"
              />
            )}
            <div>
              <p className="text-sm font-semibold text-neutral-800">{post.author.name}</p>
              {post.author.specialization && (
                <p className="text-xs text-primary-500 capitalize">
                  {post.author.specialization.replace(/-/g, " ")}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 mb-2",
            featured ? "text-2xl leading-tight" : "text-lg leading-snug"
          )}
        >
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className={cn("text-neutral-500 mb-4 line-clamp-2", featured ? "text-base" : "text-sm")}>
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-50">
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            {formattedDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
            )}
            {post.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary-500 group-hover:gap-2 transition-all duration-300">
            {locale === "ro" ? "Citește" : "Read"}
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

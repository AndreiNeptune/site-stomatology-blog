import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";

export const revalidate = 60; // Revalidate every 60 seconds
import { urlFor } from "@/lib/sanity/image";
import {
  postBySlugQuery,
  postSlugsQuery,
  recentProceduresQuery,
} from "@/lib/sanity/queries";
import PortableText from "@/components/blog/PortableText";
import SocialShare from "@/components/blog/SocialShare";
import RecentProceduresSidebar from "@/components/blog/RecentProceduresSidebar";
import { Calendar, Clock, ChevronLeft } from "lucide-react";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return { title: "Articol negăsit | Dr. Bianca Ionescu" };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null;

  return {
    title: `${post.title} | Blog Dr. Bianca Ionescu`,
    description: post.excerpt || "Citiți mai multe pe blogul Dr. Bianca Ionescu.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [{ url: imageUrl }] : previousImages,
    },
  };
}

import { Post, Category } from "@/lib/sanity/types";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, recentProcedures] = await Promise.all([
    client.fetch(postBySlugQuery, { slug }),
    client.fetch(recentProceduresQuery),
  ]) as [Post, Post[]];

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("ro-RO", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <article className="flex-1 min-w-0" id={`post-${post._id}`}>
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-primary-600 transition-colors mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Înapoi la Blog
            </Link>

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((cat: Category) => (
                  <span
                    key={cat._id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700"
                  >
                    {cat.icon && <span>{cat.icon}</span>}
                    {cat.title}
                  </span>
                ))}
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-primary-50">
                {/* Author */}
                <div className="flex items-center gap-4">
                  {post.author?.image && (
                    <Image
                      src={urlFor(post.author.image).width(48).height(48).url()}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-primary-100"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm md:text-base">
                      {post.author?.name || "Echipa Dr. Bianca Ionescu"}
                    </p>
                    {post.author?.specialization && (
                      <p className="text-xs md:text-sm text-primary-500 capitalize">
                        {post.author.specialization.replace(/-/g, " ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-5 text-sm text-neutral-500">
                  {formattedDate && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {formattedDate}
                    </span>
                  )}
                  {post.readTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min citire
                    </span>
                  )}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {imageUrl && (
              <figure className="mb-10 rounded-3xl overflow-hidden shadow-soft border border-primary-50">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover"
                />
              </figure>
            )}

            {/* Content body */}
            <div className="prose prose-lg lg:prose-xl prose-neutral max-w-none prose-headings:font-display prose-a:text-primary-600">
              {post.body ? (
                <PortableText value={post.body} />
              ) : (
                <p>Acest articol nu are conținut încă.</p>
              )}
            </div>

            {/* Footer / Share */}
            <footer className="mt-12 pt-8 border-t border-primary-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Distribuie acest articol</h4>
                  <p className="text-sm text-neutral-500">
                    Ajută și alte persoane să afle despre acest subiect.
                  </p>
                </div>
                <SocialShare
                  url={`https://drbiancaionescu.ro/blog/${post.slug.current}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-12">
              <RecentProceduresSidebar posts={recentProcedures} locale="ro" />
              
              {/* Doctor Bio (If any) */}
              {post.author?.bio && (
                <div className="bg-primary-50/50 p-6 rounded-3xl border border-primary-100/50">
                  <h3 className="font-bold text-neutral-900 mb-4">Despre Autor</h3>
                  <div className="text-sm text-neutral-600 prose-sm">
                    <PortableText value={post.author.bio} />
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

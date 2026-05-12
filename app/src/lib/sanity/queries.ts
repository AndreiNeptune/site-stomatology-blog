import { groq } from 'next-sanity'

// ─── All Posts (Blog Landing) ────────────────────────────────────────────────
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    mainImage,
    publishedAt,
    readTime,
    featured,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image }
  }
`

// ─── Featured Posts ──────────────────────────────────────────────────────────
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    mainImage,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image }
  }
`

// ─── Single Post (by slug) ──────────────────────────────────────────────────
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    body,
    bodyEn,
    mainImage,
    publishedAt,
    readTime,
    featured,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image, bio }
  }
`

// ─── Recent Procedures (sidebar) ────────────────────────────────────────────
export const recentProceduresQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    titleEn,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->{ _id, title, titleEn, slug, icon }
  }
`

// ─── All Categories ─────────────────────────────────────────────────────────
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    titleEn,
    slug,
    description,
    treatmentType,
    icon
  }
`

// ─── Posts by Category Slug ─────────────────────────────────────────────────
export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    mainImage,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image }
  }
`

// ─── Search / Filter by Treatment Type ──────────────────────────────────────
export const postsByTreatmentTypeQuery = groq`
  *[_type == "post" && $treatmentType in categories[]->treatmentType] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    mainImage,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image }
  }
`

// ─── Full-text Search ───────────────────────────────────────────────────────
export const searchPostsQuery = groq`
  *[_type == "post" && (
    title match $searchTerm ||
    titleEn match $searchTerm ||
    excerpt match $searchTerm ||
    excerptEn match $searchTerm ||
    pt::text(body) match $searchTerm ||
    pt::text(bodyEn) match $searchTerm
  )] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    mainImage,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title, titleEn, slug, treatmentType, icon },
    "author": author->{ name, slug, specialization, image }
  }
`

// ─── Post slugs for static generation ───────────────────────────────────────
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

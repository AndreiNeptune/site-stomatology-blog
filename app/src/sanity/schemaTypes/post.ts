import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: () => '📝',
  fields: [
    // ─── Content (Romanian — primary) ────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title (RO)',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (EN)',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (RO)',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on blog cards (max 200 chars)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'excerptEn',
      title: 'Excerpt (EN)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Body (RO)',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body (EN)',
      type: 'blockContent',
    }),

    // ─── Media ───────────────────────────────────────────────────────
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),

    // ─── Taxonomy ────────────────────────────────────────────────────
    defineField({
      name: 'categories',
      title: 'Procedure Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'author',
      title: 'Author (Doctor)',
      type: 'reference',
      to: {type: 'author'},
    }),

    // ─── Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Show this post prominently on the blog landing page',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const {author, date, title, media} = selection
      const formattedDate = date
        ? new Date(date).toLocaleDateString('ro-RO', {day: '2-digit', month: 'short', year: 'numeric'})
        : ''
      return {
        title,
        subtitle: `${author || 'No author'} — ${formattedDate}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Published (Newest)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published (Oldest)',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})

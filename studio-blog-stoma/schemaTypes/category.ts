import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Procedure Category',
  type: 'document',
  icon: () => '🦷',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the procedure category (e.g. Albire Dentară, Implanturi)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      description: 'English translation of the category name',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'treatmentType',
      title: 'Treatment Type',
      type: 'string',
      description: 'Used for filtering and search',
      options: {
        list: [
          {title: 'Preventive', value: 'preventive'},
          {title: 'Restorative', value: 'restorative'},
          {title: 'Cosmetic', value: 'cosmetic'},
          {title: 'Orthodontic', value: 'orthodontic'},
          {title: 'Surgical', value: 'surgical'},
          {title: 'Pediatric', value: 'pediatric'},
          {title: 'Emergency', value: 'emergency'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Emoji',
      type: 'string',
      description: 'An emoji to represent this category (e.g. ✨, 🦷, 💉)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'treatmentType',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle ? `Type: ${subtitle}` : '',
      }
    },
  },
})

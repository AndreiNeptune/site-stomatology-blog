import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Doctor / Author',
  type: 'document',
  icon: () => '👨‍⚕️',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the doctor (e.g. Dr. Maria Ionescu)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialization',
      title: 'Medical Specialization',
      type: 'string',
      description: 'e.g. Ortodonție, Endodonție, Implantologie, Estetică Dentară',
      options: {
        list: [
          {title: 'Ortodonție', value: 'ortodontie'},
          {title: 'Endodonție', value: 'endodontie'},
          {title: 'Implantologie', value: 'implantologie'},
          {title: 'Chirurgie Oro-Maxilo-Facială', value: 'chirurgie-omf'},
          {title: 'Estetică Dentară', value: 'estetica-dentara'},
          {title: 'Parodontologie', value: 'parodontologie'},
          {title: 'Protetică Dentară', value: 'protetica-dentara'},
          {title: 'Pedodonție', value: 'pedodontie'},
          {title: 'Stomatologie Generală', value: 'stomatologie-generala'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
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
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'blockContent',
      description: 'Short biography of the doctor',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'specialization',
      media: 'image',
    },
  },
})

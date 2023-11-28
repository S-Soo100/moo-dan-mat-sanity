import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'powder',
  title: 'Powder',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'brand',
      type: 'string',
    }),
    defineField({
      name: 'taste',
      title: 'taste',
      type: 'string',
    }),
    defineField({
      name: 'nation',
      title: 'nation',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      title: 'capacity',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'price',
      type: 'string',
    }),
    defineField({
      name: 'ingredient',
      title: 'ingredient',
      type: 'string',
    }),
    defineField({
      name: 'protein',
      title: 'protein',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
  // picture
  // name
  // brand
  // taste
  // nation
  // capacity
  // price
  // ingredient
  // protein
})

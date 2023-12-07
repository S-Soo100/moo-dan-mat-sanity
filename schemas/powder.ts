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
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'taste',
      title: 'Taste',
      type: 'string',
    }),
    defineField({
      name: 'nation',
      title: 'Nation',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
    }),
    defineField({
      name: 'capacity_unit',
      title: 'Capacity Unit',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'one_time_capacity',
      title: 'One-time capacity',
      type: 'number',
    }),
    defineField({
      name: 'one_time_ingredient',
      title: 'One-time ingredient',
      type: 'number',
    }),
    defineField({
      name: 'recommended_target',
      title: 'Recommended_target',
      type: 'string',
    }),
    defineField({
      name: 'seller',
      title: 'Seller',
      type: 'string',
    }),
    defineField({
      name: 'seller_link',
      title: 'Seller Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

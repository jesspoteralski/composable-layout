import { defineType } from 'sanity';

export default defineType({
  name: 'displayCard',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'imageAlt', title: 'Image Alt Text', type: 'string' },
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 3,
    },
    { name: 'ctaText', title: 'CTA Text', type: 'string' },
    { name: 'ctaHref', title: 'CTA Link', type: 'url' },
    { name: 'styles', title: 'Styles', type: 'displayStyles' },
  ],
  preview: {
    select: { heading: 'heading', media: 'image' },
    prepare({ heading, media }) {
      return { title: heading ?? 'Card', media };
    },
  },
});

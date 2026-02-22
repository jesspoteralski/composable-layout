import { defineType } from 'sanity';

export default defineType({
  name: 'displayImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'alt', title: 'Alt Text', type: 'string' },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'aspectRatio', title: 'Aspect Ratio', type: 'string', description: 'e.g. "16/9", "4/3", "1/1"' },
    { name: 'styles', title: 'Styles', type: 'displayStyles' },
  ],
  preview: {
    select: { alt: 'alt', media: 'image' },
    prepare({ alt, media }) {
      return { title: alt ?? 'Image', media };
    },
  },
});

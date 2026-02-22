import { defineType } from 'sanity';

export default defineType({
  name: 'layoutStack',
  title: 'Stack Layout',
  type: 'object',
  fields: [
    { name: 'styles', title: 'Styles', type: 'layoutStyles' },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        { type: 'displayText' },
        { type: 'displayImage' },
        { type: 'displayCard' },
      ],
    },
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return { title: 'Stack', subtitle: `${items?.length ?? 0} items` };
    },
  },
});

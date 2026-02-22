import { defineType } from 'sanity';

export default defineType({
  name: 'layoutGrid',
  title: 'Grid Layout',
  type: 'object',
  fields: [
    {
      name: 'minItemWidth',
      title: 'Minimum Item Width',
      type: 'string',
      description: 'CSS width value, e.g. "280px" or "20rem"',
      initialValue: '280px',
    },
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
      return { title: 'Grid', subtitle: `${items?.length ?? 0} items` };
    },
  },
});

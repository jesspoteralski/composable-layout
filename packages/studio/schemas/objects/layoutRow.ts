import { defineType } from 'sanity';

const columnPresets = ['50/50', '33/66', '66/33', '25/75', '75/25', '33/33/33', '25/50/25', '25/25/25/25'];

export default defineType({
  name: 'layoutRow',
  title: 'Row Layout',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Column Split',
      type: 'string',
      options: { list: columnPresets.map((v) => ({ title: v, value: v })) },
      initialValue: '50/50',
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
    select: { columns: 'columns', items: 'items' },
    prepare({ columns, items }) {
      return { title: `Row (${columns ?? '50/50'})`, subtitle: `${items?.length ?? 0} items` };
    },
  },
});

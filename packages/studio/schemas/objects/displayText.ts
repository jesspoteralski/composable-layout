import { defineType } from 'sanity';

export default defineType({
  name: 'displayText',
  title: 'Text Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    { name: 'styles', title: 'Styles', type: 'displayStyles' },
  ],
  preview: {
    select: { content: 'content' },
    prepare({ content }) {
      const text = content?.[0]?.children?.[0]?.text ?? 'Text block';
      return { title: text };
    },
  },
});

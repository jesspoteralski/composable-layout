import { defineType } from 'sanity';
import { spacing, colors, borderWidths, widths, justifyOptions } from '@composable-layout/components/tokens';

const toList = (obj: Record<string, string>) => Object.keys(obj).map((v) => ({ title: v, value: v }));

export default defineType({
  name: 'layoutStyles',
  title: 'Layout Styles',
  type: 'object',
  fields: [
    { name: 'padding', title: 'Padding', type: 'string', options: { list: toList(spacing) }, initialValue: 'none' },
    { name: 'gap', title: 'Gap', type: 'string', options: { list: toList(spacing) }, initialValue: 'md' },
    { name: 'border', title: 'Border Width', type: 'string', options: { list: toList(borderWidths) }, initialValue: 'none' },
    { name: 'borderColor', title: 'Border Color', type: 'string', options: { list: toList(colors) }, initialValue: 'gray-200' },
    { name: 'bg', title: 'Background', type: 'string', options: { list: toList(colors) }, initialValue: 'transparent' },
    { name: 'maxWidth', title: 'Max Width', type: 'string', options: { list: toList(widths) }, initialValue: 'full' },
    { name: 'justify', title: 'Justify', type: 'string', options: { list: toList(justifyOptions) }, initialValue: 'stretch' },
  ],
});

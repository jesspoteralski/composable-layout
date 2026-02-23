import { defineType } from 'sanity';
import { spacing, colors, borderWidths, radii, shadows } from '@composable-layout/components/tokens';

const toList = (obj: Record<string, string>) => Object.keys(obj).map((v) => ({ title: v, value: v }));

export default defineType({
  name: 'displayStyles',
  title: 'Display Styles',
  type: 'object',
  fields: [
    { name: 'padding', title: 'Padding', type: 'string', options: { list: toList(spacing) }, initialValue: 'none' },
    { name: 'border', title: 'Border Width', type: 'string', options: { list: toList(borderWidths) }, initialValue: 'none' },
    { name: 'borderColor', title: 'Border Color', type: 'string', options: { list: toList(colors) }, initialValue: 'gray-200' },
    { name: 'borderRadius', title: 'Border Radius', type: 'string', options: { list: toList(radii) }, initialValue: 'none' },
    { name: 'bg', title: 'Background', type: 'string', options: { list: toList(colors) }, initialValue: 'transparent' },
    { name: 'shadow', title: 'Shadow', type: 'string', options: { list: toList(shadows) }, initialValue: 'none' },
  ],
});

import { defineType } from 'sanity';

const spacingOptions = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
const colorOptions = [
  'transparent', 'white', 'black',
  'gray-50', 'gray-100', 'gray-200', 'gray-800', 'gray-900',
  'brand-50', 'brand-100', 'brand-500', 'brand-600', 'brand-700', 'brand-900',
];
const borderWidthOptions = ['none', 'thin', 'medium', 'thick'];
const widthOptions = ['full', 'prose', 'md', 'lg', 'xl'];
const justifyOptionsList = ['start', 'center', 'end', 'stretch'];

const toList = (arr: string[]) => arr.map((v) => ({ title: v, value: v }));

export default defineType({
  name: 'layoutStyles',
  title: 'Layout Styles',
  type: 'object',
  fields: [
    { name: 'padding', title: 'Padding', type: 'string', options: { list: toList(spacingOptions) }, initialValue: 'none' },
    { name: 'gap', title: 'Gap', type: 'string', options: { list: toList(spacingOptions) }, initialValue: 'md' },
    { name: 'border', title: 'Border Width', type: 'string', options: { list: toList(borderWidthOptions) }, initialValue: 'none' },
    { name: 'borderColor', title: 'Border Color', type: 'string', options: { list: toList(colorOptions) }, initialValue: 'gray-200' },
    { name: 'bg', title: 'Background', type: 'string', options: { list: toList(colorOptions) }, initialValue: 'transparent' },
    { name: 'maxWidth', title: 'Max Width', type: 'string', options: { list: toList(widthOptions) }, initialValue: 'full' },
    { name: 'justify', title: 'Justify', type: 'string', options: { list: toList(justifyOptionsList) }, initialValue: 'stretch' },
  ],
});

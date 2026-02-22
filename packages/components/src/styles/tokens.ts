/** Design tokens — single source of truth for components and Sanity dropdowns */

export const spacing: Record<string, string> = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
};

export const colors: Record<string, string> = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  'brand-50': '#eff6ff',
  'brand-100': '#dbeafe',
  'brand-500': '#3b82f6',
  'brand-600': '#2563eb',
  'brand-700': '#1d4ed8',
  'brand-900': '#1e3a5f',
};

export const borderWidths: Record<string, string> = {
  none: '0',
  thin: '1px',
  medium: '2px',
  thick: '4px',
};

export const radii: Record<string, string> = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  full: '9999px',
};

export const shadows: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
};

export const widths: Record<string, string> = {
  full: '100%',
  prose: '65ch',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const justifyOptions: Record<string, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};

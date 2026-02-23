/**
 * Convert a Sanity styles object to a Record of kebab-case HTML attributes.
 * Keys starting with `_` (Sanity internals) are filtered out.
 */
export function toAttrs(
  styles: Record<string, string> | undefined,
): Record<string, string> {
  if (!styles) return {};
  return Object.fromEntries(
    Object.entries(styles)
      .filter(([k, v]) => v && !k.startsWith('_'))
      .map(([k, v]) => [k.replace(/([A-Z])/g, '-$1').toLowerCase(), v]),
  );
}

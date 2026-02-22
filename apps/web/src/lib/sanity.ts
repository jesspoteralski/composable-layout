import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getAllPages() {
  return client.fetch(`
    *[_type == "page"]{
      title,
      "slug": slug.current,
      seoTitle,
      seoDescription,
      sections[]{
        _type,
        _key,
        // Layout-specific fields
        columns,
        minItemWidth,
        styles,
        items[]{
          _type,
          _key,
          // Display-specific fields
          content,
          heading,
          body,
          ctaText,
          ctaHref,
          alt,
          caption,
          aspectRatio,
          imageAlt,
          styles,
          "imageSrc": image.asset->url,
        }
      }
    }
  `);
}

export async function getPageBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      seoTitle,
      seoDescription,
      sections[]{
        _type,
        _key,
        columns,
        minItemWidth,
        styles,
        items[]{
          _type,
          _key,
          content,
          heading,
          body,
          ctaText,
          ctaHref,
          alt,
          caption,
          aspectRatio,
          imageAlt,
          styles,
          "imageSrc": image.asset->url,
        }
      }
    }
  `,
    { slug },
  );
}

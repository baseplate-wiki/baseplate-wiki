export const content_registry = {
    'index': () => import('./index.mdx'),
    'test': () => import('./test.mdx'),
} as const;



export type page_slug = keyof typeof content_registry;
export const all_page_slugs: string[] = Object.keys(content_registry);
export const content_registry = {
    'index': () => import('./index.mdx'),
    'test': () => import('./test.mdx'),

    'Plugins': () => import('./Plugins/index.mdx'),
    'Plugins/Resurface': () => import('./Plugins/Resurface.mdx'),
    'Plugins/GapFill': () => import('./Plugins/GapFill.mdx'),
    'Plugins/ResizeAlign': () => import('./Plugins/ResizeAlign.mdx'),
} as const;



export type page_slug = keyof typeof content_registry;
export const all_page_slugs: string[] = Object.keys(content_registry);
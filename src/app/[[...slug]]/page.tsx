import * as React from "react";
import type { Metadata } from "next";

import { all_page_slugs, content_registry } from "@/content/registry";
type params = { slug ?: string[] };
type content_module = {
  default : React.ComponentType<any>;
  meta : { title ?: string; };
};

export const dynamicParams = false;

export default async function RootPage({params} : { params : Promise<params>}) {
  const { slug = [] } = await params;
  const key = (slug.length === 0 ? 'index' : slug.join('/')) as keyof typeof content_registry;

  const loader = content_registry[key] as unknown as () => Promise<content_module>;
  if (!loader) return <>not found here</>;

  const mod = await loader();
  const Content = mod.default;

  return (
      <>
        <Content />
        {/* <DocsFooter cfg={mod.wos_doc} accent_hex="#74E5FF" /> */}
      </>
  );
}

export function generateStaticParams() {
  return all_page_slugs.map((s) => ({ slug: s === 'index' ? [] : s.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<params>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const key = (slug.length === 0 ? "index" : slug.join("/")) as keyof typeof content_registry;
  const loader = content_registry[key];
  if (!loader) return {};
  const mod = (await loader()) as content_module;
  const meta = mod.meta ?? {};
  return {
    title: (meta.title && meta.title + ' - Baseplate Wiki') ?? "Baseplate Wiki",
    // description: meta.description,
    // other: meta.date_iso ? { "article:published_time": meta.date_iso } : undefined,

    // icons: {
    //     icon: [{ url: "/gcd/branding/favicons/woufaviconlight.svg", type: "image/svg" }],
    //     shortcut: ["/gcd/branding/favicons/woufaviconlight256.ico"],
    //     apple: [{ url: "/gcd/branding/favicons/woufaviconlight256.png", sizes: "256x256" }],
    // },
  };
}
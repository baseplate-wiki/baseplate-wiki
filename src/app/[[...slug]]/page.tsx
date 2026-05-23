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
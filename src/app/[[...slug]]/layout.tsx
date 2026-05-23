import * as React from "react";
import type { Metadata } from "next";
import { all_page_slugs, content_registry } from "@/content/registry";
import Nav from "@/src/components/nav";
import Page from "@/src/components/page";

import '../prose.css'

type content_module = {
  default : React.ComponentType<any>;
  meta : { title ?: string; };
};

export default async function PageLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug?: string[] }> }) {
    const { slug = [] } = await params;

    const key = (slug.length === 0 ? "index" : slug.join("/")) as keyof typeof content_registry;
    const loader = content_registry[key];
    if (!loader) { return <>Error displaying content.</>; }
    const mod = (await loader()) as unknown as content_module;
    const meta = mod.meta || {};

    meta.title = meta.title ?? "Untitled";

    return (
        <div>
            <Nav />
            <Page title={meta.title}>
                {children}
            </Page>
        </div>
    )
}

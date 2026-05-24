"use client";

import Link from "next/link";
import React from "react";

export default function Page({ children, title }: {children: React.ReactNode, title : string}) {
    const url = new URL(document.URL)

    const slug = url.pathname.substring(1)

    return <main className="m-4">
        <div className="container mx-auto">

            <div className="mb-4">
                <Link target="_blank" href={`https://github.com/baseplate-wiki/baseplate-wiki/tree/main/content/${slug}.mdx`}>[ edit this page ]</Link>
                <Link target="_blank" href={`https://raw.githubusercontent.com/baseplate-wiki/baseplate-wiki/refs/heads/main/content/${slug}.mdx`}>[ view raw ]</Link>
            </div>

            <h1 className="font-bold text-3xl tracking-tight mb-2"> {title} </h1>

            <div className="prose">
                {children}
            </div>
        </div>
    </main>
}
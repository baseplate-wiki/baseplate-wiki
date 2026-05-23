import Link from "next/link";
import React from "react";

export default function Page({ children, title }: {children: React.ReactNode, title : string}) {
    return <main className="m-4">
        <div className="container mx-auto">

            <div className="mb-4">
                <Link href={`https://github.com/baseplate-wiki/baseplate-wiki/tree/main/content/${title.toLocaleLowerCase()}.mdx`}>[ edit this page ]</Link>
                <Link href={`https://raw.githubusercontent.com/baseplate-wiki/baseplate-wiki/refs/heads/main/content/${title.toLocaleLowerCase()}.mdx`}>[ view raw ]</Link>
            </div>

            <h1 className="font-bold text-3xl tracking-tight mb-2"> {title} </h1>

            <div className="prose">
                {children}
            </div>
        </div>
    </main>
}
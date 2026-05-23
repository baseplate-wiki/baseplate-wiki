import React from "react";

export default function Page({ children }: {children: React.ReactNode}) {
    return <main className="m-4">
        <div className="container mx-auto">
            {children}
        </div>
    </main>
}
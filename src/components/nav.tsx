import Link from "next/link";

export default function Nav() {
    return (
        <nav className="sticky top-0 bg-gray-800 mb-4">
            <div className="w-full h-12">
                <div className="relative flex h-12 items-center justify-between mx-4">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start container mx-auto">
                        <Link className="flex shrink-0 items-center gap-3 font-bold" href='/'>
                            Baseplate
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
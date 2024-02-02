import Link from "next/link";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import { ActiveLinks } from "../ActiveLinks";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="px-6 pt-4 pb-20 md:pt-14 md:pb-20 md:px-20 flex items-center justify-between">
            <Link href="/">
                <Image src={logo} alt="Blogga" />
            </Link>
            <ActiveLinks />
            <Link
                href="/"
                className="hidden md:flex py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-black transition-colors"
            >
                Subscribe
            </Link>
            <div className="flex md:hidden">
                <Menu stroke="#ffffff" size={32} />
            </div>
        </nav>
    );
}

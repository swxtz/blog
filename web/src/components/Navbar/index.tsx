import Link from "next/link";

import logo from "../../../public/logo.svg";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="pt-14 pb-40 px-20">
            <Link href="/">
                <Image src={logo} alt="Blogga" />
            </Link>
        </nav>
    );
}

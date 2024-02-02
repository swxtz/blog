"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinksButtonProps extends LinkProps {
    href: string;
    children: ReactNode;
}

export function ActiveLinksButton({
    href,
    children,
    ...rest
}: ActiveLinksButtonProps) {
    const pathname = usePathname();
    const active = pathname === href.toString();

    return (
        <Link
            href={href}
            className={
                active
                    ? "font-bold text-lg text-gray-100 hover:text-gray-300 transition-colors"
                    : "font-semibold text-lg text-gray-400 hover:text-gray-500 transition-colors"
            }
            {...rest}
        >
            {children}
        </Link>
    );
}

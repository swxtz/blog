import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blogga",
    description: "Seu Blog de Tecnologia",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="br">
            <body className={nunito.className}>
                <MaxWidthContainer>
                    <Header />
                    {children}
                </MaxWidthContainer>
            </body>
        </html>
    );
}

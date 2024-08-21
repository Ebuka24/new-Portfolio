import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/blog/Header";
import Footer from "../components/blog/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My Blog",
    description: "blog articles",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
                </body>
        </html>
    );
}

"use client";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="w-scren h-screen flex flex-col"
            >
                <Header/>
                <main className="flex-1 flex justify-center items-center mx-5">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}

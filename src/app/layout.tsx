"use client";
import { useState } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SideModal } from "@/components/ui/ModalLateral";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <html lang="pt-br">
            <body className="min-h-screen flex flex-col"
            >
                <Header onOpenModal={() => setModalOpen(true)}/>
                <SideModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
                <main className="flex flex-1 justify-center">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}

"use client";
import { useState } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SideModal } from "@/components/ui/ModalLateral";

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <html lang="pt-br">
            <body
            >
                <Header onOpenModal={() => setModalOpen(true)}/>
                <SideModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
                {children}
            </body>
        </html>
    );
}

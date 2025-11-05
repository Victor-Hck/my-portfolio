import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Victor Gomes — Desenvolvedor Front-end",
    description: "Portfólio profissional de Victor Gomes, desenvolvedor web front-end.",
    icons: {
        icon: [
            { url: "/prompt.svg" },               // ícone padrão
            { url: "/icon.png", type: "image/png" } // opcional: PNG 512x512
        ],
        apple: "/apple-touch-icon.png", // opcional para iPhone/iPad
    },
    openGraph: {
        title: "Victor Gomes — Desenvolvedor Front-end",
        description: "Portfólio profissional e projetos de Victor Gomes.",
        url: "https://seusite.com", // coloque quando tiver seu domínio
        siteName: "Victor Gomes",
        images: [
            {
                url: "/banner.png", // coloque um banner 1200x630
                width: 1200,
                height: 630,
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="w-screen min-h-screen flex flex-col overflow-x-hidden"
            >
                <Header/>
                <main className="flex-1 flex justify-center items-center mx-4">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}

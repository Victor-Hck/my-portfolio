"use client";
import Image from "next/image";
import { useState } from "react";
import { SideMode } from "../ui/ModalLateral";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return(
        <header className="flex justify-between items-center border w-screen px-10">
            {/* Botão abre modal */}
            <button
                onClick={() => setOpen(true)}
                className="border rounded-md p-1">
                Abrir modal
            </button>
            <Image
                src=""
                alt="Imagem teste"
                width={100}
                height={20}
                quality={100}
            />
            <nav className="">
                <div className="flex gap-3">
                    <a 
                        className=""
                        href="./">about</a>
                    <a 
                        className=""
                        href="./">contato</a>
                    <a 
                        className=""
                        href="./">project</a>
                </div>
            </nav>
            <div className="flex gap-3">
                <p className="border rounded-md p-1">GitHub</p>
                <p className="border rounded-md p-1">Linkdim</p>
            </div>
            {/* Modal */}
            <SideMode open={open} onClose={() => setOpen(false)}/>
        </header>
    );
};
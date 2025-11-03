"use client";
import Image from "next/image";
import { HeaderProps } from "@/types/global";

export const Header = ({onOpenModal}: HeaderProps) => {
    return(
        <header className="flex fixed justify-between items-center border-b w-screen px-10">
            <button
                className="border p-3 rounded-lg cursor-pointer hover:bg-black hover:text-white"
                onClick={onOpenModal}
            >Abrir Modal</button>
            
            <Image
                src="/public/gojo.jpg"
                alt="Imagem teste"
                width={20}
                height={20}
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
        </header>
    );
};
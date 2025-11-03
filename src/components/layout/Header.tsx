"use client";
import { HeaderProps } from "@/types/global";

export const Header = ({onOpenModal}: HeaderProps) => {
    return(
        <header className="flex sticky top-0 justify-between items-center border-b w-screen h-15 px-10">
            <button
                className="border p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white"
                onClick={onOpenModal}
            >Abrir Modal</button>
            <div>
                <h1 className="text-3xl">Victor Gomes</h1>
            </div>
            <nav className="">
                <div className="flex gap-3">
                    <a 
                        className="border rounded-lg p-1"
                        href="./">about</a>
                    <a 
                        className="border rounded-lg p-1"
                        href="./">contato</a>
                    <a 
                        className="border rounded-lg p-1"
                        href="./">project</a>
                </div>
            </nav>
            <div className="flex gap-3">
                <p className="border rounded-md p-1 cursor-pointer">GitHub</p>
                <p className="border rounded-md p-1 cursor-pointer">Linkdim</p>
            </div>
        </header>
    );
};
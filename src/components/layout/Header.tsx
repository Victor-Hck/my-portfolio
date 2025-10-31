"use client";
import Image from "next/image";

export const Header = () => {
    return(
        <header className="flex justify-between items-center border w-screen px-10">
            <button className="border rounded-md p-1">
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
            
        </header>
    );
};
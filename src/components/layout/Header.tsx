"use client";

import { useAudio } from "@/hooks/PlayStop";

export const Header = () => {
    const { play, pause, isPlaying } = useAudio("/Drums-of-Liberation.mp3");

    return (
        <header className="
            sticky top-0 z-50
            flex justify-between items-center
            h-16 px-4 md:px-10
            bg-deepSpace/80 backdrop-blur-md
            border-b border-neonPink/60
            shadow-[0_0_10px_#ff00e6] animate-pulse
        ">
            <h1 className="text-2xl md:text-4xl font-bold [text-shadow:0_0_10px_#a855f7] animate-pulse hover:-translate-y-1 duration-200 cursor-pointer">
                Victor Gomes
            </h1>

            <nav className="hidden md:flex">
                <div className="flex gap-3">
                    <a 
                        className="border font-bold text-white bg-purple-600 animate-pulse duration-200 hover:-translate-y-1
                        text-lg shadow-[0_0_10px_#a855f7] rounded-lg px-3 py-1 cursor-pointer"
                    >Tecnologias</a>
                    
                    <a className="border font-bold text-white bg-purple-600 animate-pulse duration-200 hover:-translate-y-1
                        text-lg shadow-[0_0_10px_#a855f7] rounded-lg px-3 py-1 cursor-pointer"
                    >Projetos</a>
                </div>
            </nav>

            <div className="flex gap-2 md:gap-3">
                <a 
                    href="https://github.com/Victor-Hck"
                    target="_blank"
                    className="border rounded-lg border-white text-white font-bold animate-pulse duration-200 hover:-translate-y-1
                    bg-cyberYellow px-3 py-1"
                >GitHub</a>

                <a 
                    href="https://www.linkedin.com/in/victor-antônio-11596b218/"
                    target="_blank"
                    className="border rounded-lg border-white text-white font-bold animate-pulse duration-200 hover:-translate-y-1
                    bg-cyberYellow px-3 py-1"
                >LinkedIn</a>

                <button
                    onClick={isPlaying ? pause : play}
                    className="border rounded-lg border-white text-white font-bold animate-pulse duration-200 hover:-translate-y-1
                    bg-cyberYellow px-3 py-1 cursor-pointer"
                >
                    {isPlaying ? "Pausar" : "Tocar música"}
                </button>
            </div>
        </header>
    );
};

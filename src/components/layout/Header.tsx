"use client";

import { useAudio } from "@/hooks/PlayStop";

export const Header = () => {
    const { play, pause, isPlaying } = useAudio("/Drums-of-Liberation.mp3");
    return(                                                                                 // border-black shadow-[0_0_10px_#ff00e6]  animate-pulse
        <header className="flex sticky top-0 z-50 justify-between items-center h-16 px-10 
            bg-deepSpace/80 backdrop-blur-md border-b border-neonPink/60 shadow-[0_0_10px_#ff00e6] animate-pulse">
            <div>
                <h1 className="text-4xl font-bold text-shadow-[0_0_10px_#a855f7] animate-pulse transition-all duration-200 hover:-translate-1 cursor-pointer">Victor Gomes</h1>  
            </div>
            <nav className="">
                <div className="flex gap-3">
                    <a 
                        className="border text- font-bold text-white bg-purple-600 animate-pulse transition-all duration-200 hover:-translate-1 
                        text-1xl shadow-[0_0_10px_#a855f7] rounded-lg p-1"
                        href="./">Tecnologias</a>
                    
                    <a 
                        className="border font-bold text-white bg-purple-600 animate-pulse transition-all duration-200 hover:-translate-1
                        text-1xl shadow-[0_0_10px_#a855f7] rounded-lg p-1"
                        href="./">Projetos</a>
                </div>
            </nav>
            <div className="flex gap-3">
                <a href="https://github.com/Victor-Hck" target="_blank" className="border rounded-lg border-white text-white font-bold animate-pulse transition-all duration-200 hover:-translate-1
                bg-cyberYellow shadow[2px_2px_10px_#0a0f24] p-1 cursor-pointer">GitHub</a>
                <a href="https://www.linkedin.com/in/victor-antônio-11596b218/" target="_blank" className="border rounded-lg border-white text-white font-bold animate-pulse transition-all duration-200 hover:-translate-1
                bg-cyberYellow shadow[2px_2px_10px_#0a0f24] p-1 cursor-pointer">Linkdim</a>
                <button
                    onClick={isPlaying ? pause : play}
                    className="border rounded-lg border-white text-white font-bold animate-pulse transition-all duration-200 hover:-translate-1
                bg-cyberYellow shadow[2px_2px_10px_#0a0f24] p-1 cursor-pointer"
                >
                    {isPlaying ? "Pausar música" : "Tocar música"}
                </button>
            </div>
        </header>
    );
};
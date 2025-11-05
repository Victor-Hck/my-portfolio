"use client";
import { useRef, useState } from "react";

export function useAudio(src: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(src);
            audioRef.current.loop = true;
        }

        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    };

    return {
        isPlaying,
        play,
        pause,
    };
}

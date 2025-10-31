"use client";

import { ModalLateral } from "@/types/modal";
import { useEffect } from "react";

export const SideMode = ({open, onClose}: ModalLateral) => {
    // Trave scroll quando abrir
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        
    }, [open]);

    return(
        <>
            {/* overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed-0 inset-0 bg-black/50 z-40">
                </div>
            )}

            {/* Modal Lateral */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold"
                >
                    X
                </button>
                
            </div>
        </>
    );
};
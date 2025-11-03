import { ModalLateral } from "@/types/modal";

export const SideModal = ({isOpen, onClose}: ModalLateral) => {
    if (!isOpen) return null;

    return(
        <div className="flex fixed h-full w-100 bg-black">
            <div>
                <button
                    className="flex justify-end text-white"
                    onClick={onClose}
                >x</button>
            </div>
        </div>
    );
};
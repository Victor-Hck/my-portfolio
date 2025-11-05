import Image from "next/image";

export const Footer = () => {
    return(
        <footer className="flex justify-end items-center mb-3">
            <div className="flex mr-90 p-3 gap-3  rounded-lg">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">Fale comigo</h1>
                    <p className="text-sm whitespace-pre-line font-bold">{"Me mande um e-mail ou ligue se preferir.\n "}</p>
                    <div className="flex gap-4 mt-3">
                        <a href="https://wa.me/5531997714381" target="_blank" className="border rounded-lg py-2 px-3 font-bold 
                        shadow-[0_0_10px_#a855f7] border-purple-600 text-white bg-purple-600 animate-pulse transition-all duration-200 hover:-translate-1">Telefone</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.profissional3592@gmail.com" target="_blank" className="border rounded-lg py-2 px-3 font-bold 
                        shadow-[0_0_10px_#a855f7] border-cyberYellow text-black bg-cyberYellow animate-pulse transition-all duration-200 hover:-translate-1">E-mail</a>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={"/dexter.gif"}
                        alt="detex"
                        width={200}
                        height={200}
                        className="rounded-lg  animate-pulse transition-all duration-200 hover:-translate-1 shadow-[0_0_10px_#a855f7]"
                    />
                </div>
            </div>
        </footer>
    );
};

// flex justify-center border-t w-full h-50  overflow-hidden

// flex justify-center fixed bottom-0 left-0 transform translate-y-full transition-transform duration-300
// w-full py-10 backdrop-blur-md border-t border-eletricBlue/40 shadow-[0_0_25px_#00eaff80]
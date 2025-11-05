import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="flex justify-center md:justify-end items-center mt-1 mb-3 px-4">
            <div className="flex flex-col md:flex-row gap-5 p-3 rounded-lg mr-90">
                
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold">Fale comigo</h1>
                    <p className="text-sm font-bold whitespace-pre-line">
                        {"Me mande um e-mail ou ligue se preferir.\n "}
                    </p>

                    <div className="flex gap-4 mt-3">
                        <a
                            href="https://wa.me/5531997714381"
                            target="_blank"
                            className="border rounded-lg py-2 px-3 font-bold 
                            shadow-[0_0_10px_#a855f7] border-purple-600 text-white bg-purple-600 animate-pulse hover:-translate-y-1 duration-200"
                        >
                            Telefone
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.profissional3592@gmail.com"
                            target="_blank"
                            className="border rounded-lg py-2 px-3 font-bold 
                            shadow-[0_0_10px_#a855f7] border-cyberYellow text-black bg-cyberYellow animate-pulse hover:-translate-y-1 duration-200"
                        >
                            E-mail
                        </a>
                    </div>
                </div>

                <div className="mx-auto md:mx-0">
                    <Image
                        src="/dexter.gif"
                        alt="dexter"
                        width={200}
                        height={200}
                        className="rounded-lg animate-pulse hover:-translate-y-1 duration-200 shadow-[0_0_10px_#a855f7]"
                    />
                </div>
            </div>
        </footer>
    );
};

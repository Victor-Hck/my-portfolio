import Image from "next/image";

export const Footer = () => {
    return(
        <footer className="flex justify-center items-center border-t w-screen h-50 overflow-hidden">
            <div className="flex flex-col ">
                <h1>Fale comigo</h1>
                <p>alguma mensagem ae</p>
                <div>
                    <a href="">telefone</a>
                    <a href="">email</a>
                </div>
            </div>
            <Image
                src={"/dexter.gif"}
                alt=""
                width={200}
                height={100}
                className="rounded-lg ml-5"
            />
        </footer>
    );
};
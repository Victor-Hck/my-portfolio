"use client";
import Image from "next/image";

const Home = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center rounded-lg my-5
            w-full max-w-6xl bg-[#080c1e] transition-all duration-200 hover:-translate-y-1">

            <div className="p-8 font-bold mt-10 max-w-xl">
                <p className="text-2xl text-blue-500">Hello World 👋</p>

                <h1 className="text-5xl text-white animate-bounce [text-shadow:2px_2px_10px_blue]">
                    Eu sou o Victor
                </h1>

                <h2 className="text-3xl text-[#616060] animate-pulse [text-shadow:0_0_10px_green]">
                    Desenvolvedor Web Front-end
                </h2>

                <button
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/curriculo.pdf";
                        link.download = "Curriculo-Victor-Gomes.pdf";
                        link.click();
                    }}
                    className="border rounded-lg mt-4 px-3 py-3 cursor-pointer
                    font-bold text-white bg-purple-600 transition-all duration-200 hover:-translate-y-1
                    animate-pulse shadow-[0_0_15px_#a855f7]">
                    Baixar CV
                </button>

                <p className="mt-5 text-sm leading-relaxed">
                    Com 24 anos, sou um profissional entusiasta por tecnologia e com uma paixão genuína por tudo que a envolve.
                    Possuo uma forte inclinação para o estudo contínuo e dedico-me ativamente à atualização constante dos meus conhecimentos e habilidades. 
                    Acredito que a tecnologia avança rapidamente, e por isso, mantenho um ritmo de aprendizado ininterrupto para garantir que minhas competências estejam sempre alinhadas com as exigências e inovações do mercado de trabalho.
                    Minha dedicação em estudar continuamente não é apenas uma obrigação, mas uma motivação intrínseca para me qualificar e contribuir de forma significativa para os desafios e projetos das empresas. 
                    Estou sempre em busca de novas ferramentas, metodologias e tendências para aplicar na prática e agregar valor.
                </p>

                <div className="border-l-4 border-white mt-10">
                    <p className="pl-2 text-sm [text-shadow:1px_1px_11px_white]">
                        Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.
                    </p>
                </div>

                <p className="mt-2 text-sm hover:underline cursor-pointer">
                    Autor: Thales Valentim
                </p>
            </div>

            <div className="flex justify-center relative w-full max-w-[500px] h-[400px] group cursor-pointer mt-40">
                <Image
                    src={"/nika-sungod.gif"}
                    alt="Luffy Gear five - One Piece"
                    width={420}
                    height={420}
                    className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <Image
                    src={"/luffy-gear5.gif"}
                    alt="Luffy Gear five - One Piece"
                    fill
                    className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                />
            </div>

        </div>
    );
};

export default Home;

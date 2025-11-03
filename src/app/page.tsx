import Image from "next/image";

const Home = () => {
    return(
        <div className="flex justify-center border rounded-lg my-3 w-300 bg-[#080c1e]">
            <div className="p-8 font-bold">
                <p className="text-2xl text-blue-500">Hello World 👋</p>
                <h1 className="text-5xl shadow-md text-white">Eu sou o Victor</h1>
                <h2 className="text-4xl text-[#616060]">Desenvolvedor Web Front-end</h2>
                <button className="border rounded-lg mt-1 p-2 cursor-pointer text-white bg-blue-500">Baixar CV</button>
            </div>
            <Image
                src={"/nika-sungod.gif"}
                alt="luffy"
                width={500}
                height={500}
                quality={100}
                className=""
            />
        </div>
    );
};

export default Home;
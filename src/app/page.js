import Image from "next/image";
import { Logo } from "./components/icons";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h1 className="bg-gradient-to-r from-[#f4f4f4]  via-white to-[#BDBDBD] inline-block text-transparent bg-clip-text text-center text-2xl md:text-8xl font-semibold ">
          Diseñamos experiencias <br /> Impulsamos marcas
        </h1>

        <h2 className="text-[#BDBDBD] text-sm md:text-3xl font-regular mt-4 mb-8 text-center leading-relaxed">
          La solución digital que necesitas para impulsar tus proyectos
        </h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

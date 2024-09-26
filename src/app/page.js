"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Slider from "./components/common/Slider";
import PrimaryButton from "./components/common/PrimaryButton";
import SectionTitle from "./components/common/SectionTitle";
import { ScrollSliderImages } from "./components/common/ScrollSliderImages";
import Graphics from "./components/common/Graphics";

export default function Home() {
  const containerRef = useRef(null);
  const scrollYMotionValue = useMotionValue(0);

  const ANIMATION_DELAY = 4.4;

  // Seteo el scroll
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        if (scrollYMotionValue) {
          scrollYMotionValue.set(scrollTop);
          console.log(scrollTop);
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollYMotionValue]);

  return (
    <main
      className=" h-screen w-screen overflow-y-scroll overflow-x-hidden font-[family-name:var(--font-geist-sans)] relative bg-background bg-cover"
      ref={containerRef}
    >
      <div className="flex flex-col items-center px-0 w-full mt-56">
        <section className="px-5 flex flex-col items-center justify-center mb-12">
          <motion.div
            className="overflow-hidden rounded-full px-6 py-1 text-sm md:text-xl lg:text-2xl bg-[#0E0E0E] border-t border-t-[#1e1e1e] mb-2 md:mb-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <motion.h3
              className="whitespace-nowrap bg-gradient-to-r from-[#d7d6d6] via-[#e2e2e2] to-[#838383] inline-block text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: ANIMATION_DELAY + 0.7,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              Marketing digital
            </motion.h3>
          </motion.div>

          <motion.h1
            className=" bg-gradient-to-r from-[#f4f4f4]  via-white to-[#BDBDBD] inline-block text-transparent bg-clip-text text-center text-2xl md:text-5xl lg:text-8xl font-semibold "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Diseñamos experiencias
            <br />
            Impulsamos marcas
          </motion.h1>

          <motion.p
            className=" text-sm md:text-2xl font-regular mt-4 mb-8 text-center leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.6,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            La solución que necesitas para impulsar tus proyectos a otro nivel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.7,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <PrimaryButton text={"Contactar"} />
          </motion.div>
        </section>

        <Slider />
      </div>
      <section className="px-5 md:px-20 my-28" id="results">
        <SectionTitle text={"Impulsa tu crecimiento"} />
        <h4 className="text-lg md:text-2xl mt-3">
          Resultados tangibles que transforman tu negocio
        </h4>
        <div className=" w-full flex flex-col items-center mt-6 md:mt-14">
          {/* grafico */}
          <Graphics />

          {/* pre / post */}
          <motion.div
            className="mt-10 ml-3 flex justify-center gap-4 md:gap-32 text-[10px] sm:text-sm md:text-lg"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="px-3 md:px-6 py-2 md:py-3 uppercase rounded-full flex items-center gap-4 border border-gray-primary text-gray-primary">
              <div className="h-3 w-3 rounded-full bg-gray-primary"></div>
              <p className="">pre zag digital</p>
            </div>
            <div className="px-3 md:px-6 py-2 md:py-3  uppercase rounded-full flex items-center gap-2 border border-primary text-primary">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <div className="h-3 w-3 rounded-full bg-[#08a1e3]"></div>
              <p className="ml-2 md:ml-4">post zag digital</p>
            </div>
          </motion.div>

          {/* resultados */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 w-full px-10 md:px-24 lg:px-72 gap-8 mt-16 text-lg md:text-xl text-gray-primary"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div>
              <p>
                <span className="font-semibold text-white">
                  Aumenta tu visibilidad{" "}
                </span>
                al conectar con tu audiencia ideal de forma efectiva.
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-white">
                  Multiplica tus conversiones{" "}
                </span>
                al optimizar las estrategias publicitarias.
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-white">
                  Mejora el engagement{" "}
                </span>
                con contenido diseñado para generar interacción genuina y
                efectiva.
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-white">
                  Maximiza tu ROI{" "}
                </span>
                invirtiendo en campañas precisas y creativas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 md:px-20 my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <SectionTitle text={"Estrategia. Produccion. Marketing."} />
          <div className="mt-2 md:mt-0 pl-0 md:pl-14 h-full text-sm md:text-lg text-gray-primary flex items-center">
            <p>
              Diseñamos estrategias en base a la definición del público ideal;
              los objetivos comerciales ; el mensaje a transmitir y la
              optimización de los recursos disponibles para cada proyecto.
            </p>
          </div>
        </div>
      </section>
      <div className=" w-full">
        <ScrollSliderImages currentScroll={scrollYMotionValue} />
      </div>
      <div className="h-96"></div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}

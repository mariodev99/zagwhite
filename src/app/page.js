"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Slider from "./components/common/Slider";
import PrimaryButton from "./components/common/PrimaryButton";
import SectionTitle from "./components/common/SectionTitle";
import { ScrollSliderImages } from "./components/common/ScrollSliderImages";
import Graphics from "./components/common/Graphics";
import {
  AudiovisualIcon,
  BrandingIcon,
  CashIcon,
  CmIcon,
  DesignIcon,
  MetaIcon,
} from "./components/icons";

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

  const services = [
    {
      icon: <BrandingIcon />,
      title: "Branding",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
    {
      icon: <DesignIcon />,
      title: "Diseño Gráfico",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
    {
      icon: <MetaIcon />,
      title: "Meta ADS",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
    {
      icon: <CmIcon />,
      title: "Community Management",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
    {
      icon: <AudiovisualIcon />,
      title: "Contenido Audiovisual",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
    {
      icon: <CashIcon />,
      title: "Asesoramiento Comercial",
      description:
        "Ideamos y diseñamos tu marca de forma estrategica para que tu publico objetivo sienta una conexion",
    },
  ];

  return (
    <main
      className=" h-screen w-screen overflow-y-scroll overflow-x-hidden font-[family-name:var(--font-geist-sans )] relative bg-white bg-cover"
      ref={containerRef}
    >
      <div className="flex flex-col items-center px-0 w-full mt-56">
        <section className="px-5 flex flex-col items-center justify-center mb-12">


          <motion.h1
            className="font-[family-name:var(--font-oswald)]   bg-gradient-to-r from-[#000] via-black to-[#000] inline-block text-transparent bg-clip-text text-center text-3xl md:text-5xl lg:text-8xl font-bold "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Transformamos ideas
            <br />
            en resultados
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
            <PrimaryButton text={"Conversemos"} />
          </motion.div>
        </section>

        <Slider />
      </div>
      <section className="px-5 md:px-20 my-28" id="results">
        <SectionTitle text={"Impulsa tu crecimiento"} />
        <h4 className="text-lg md:text-2xl mt-3">
          Resultados tangibles que transforman tu negocio
        </h4>
            {/* graficos */}
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
      <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 my-32">
        {services.map(({ title, icon, description }) => (
          <div key={title} className="pr-10">
            {icon}
            <h4 className="text-lg md:text-2xl font-semibold mt-2">{title}</h4>
            <p className="text-sm md:text-lg font-medium mt-2">{description}</p>
          </div>
        ))}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}

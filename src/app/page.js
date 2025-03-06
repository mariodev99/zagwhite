"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Slider from "./components/common/Slider";
import SectionTitle from "./components/common/SectionTitle";
import {
  AudiovisualIcon,
  BrandingIcon,
  CashIcon,
  CmIcon,
  DesignIcon,
  FirstFigure,
  MetaIcon,
  SecondFigure,
} from "./components/icons";
import LayoutWrapper from "./components/common/LayoutWrapper";
import ServicesSection from "./components/ServiceSection";

export default function Home() {
  const containerRef = useRef(null);
  const scrollYMotionValue = useMotionValue(0);

  const ANIMATION_DELAY = 3.3;

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
      className=" h-screen w-screen overflow-y-scroll overflow-x-hidden font-[family-name:var(--font-geist-sans )] relative bg-background bg-cover"
      ref={containerRef}
    >
      <div className="flex flex-col items-center w-full mt-44 md:mt-56">
        <section className="px-4 flex flex-col items-center justify-center mb-12">
          <motion.div
            className="font-[family-name:var(--font-oswald)] color-black text-center text-5xl md:text-7xl lg:text-9xl font-bold "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <h1> Transformamos ideas</h1>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 37 37"
                fill="none"
                className="size-12 md:size-16 lg:size-24 mr-2 mt-3 md:mt-5 lg:mt-10"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18"
                  fill="white"
                  stroke="#F1F1F1"
                />
                <path
                  d="M26.5 14C26.5 13.4477 26.0523 13 25.5 13L16.5 13C15.9477 13 15.5 13.4477 15.5 14C15.5 14.5523 15.9477 15 16.5 15L24.5 15L24.5 23C24.5 23.5523 24.9477 24 25.5 24C26.0523 24 26.5 23.5523 26.5 23L26.5 14ZM14.7107 22.8553L15.1579 21.9609H15.1579L14.7107 22.8553ZM11.2431 21.1215L10.7958 22.016L10.7958 22.016L11.2431 21.1215ZM8.98399 21.4483L9.66631 22.1793L8.98399 21.4483ZM17.7264 23.1878L26.2071 14.7071L24.7929 13.2929L16.3122 21.7736L17.7264 23.1878ZM15.1579 21.9609L11.6903 20.2271L10.7958 22.016L14.2635 23.7498L15.1579 21.9609ZM8.30168 20.7172L1.81768 26.7689L3.18232 28.2311L9.66631 22.1793L8.30168 20.7172ZM11.6903 20.2271C10.5693 19.6666 9.21793 19.862 8.30168 20.7172L9.66631 22.1793C9.97173 21.8943 10.4222 21.8291 10.7958 22.016L11.6903 20.2271ZM16.3122 21.7736C16.0078 22.0779 15.5429 22.1534 15.1579 21.9609L14.2635 23.7498C15.4184 24.3272 16.8133 24.1009 17.7264 23.1878L16.3122 21.7736Z"
                  fill="#FE491F"
                />
              </svg>
              <div className=""> en resultados</div>
            </div>
          </motion.div>

          <motion.h2
            className=" text-base md:text-xl lg:text-2xl font-regular my-6 md:my-8 lg:my-10 leading-relaxed text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.6,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Creamos estrategias únicas que posicionan tu marca, conectan con tu
            público y generan resultados medibles.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY + 0.7,
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex justify-center w-full md:w-64"
          >
            <a
              href="/contacto"
              className="text-white text-center h-full font-semibold px-6 py-3 bg-[#FE491F] rounded-full text-lg md:text-2xl w-full"
            >
              Conversemos
            </a>
          </motion.div>
        </section>
      </div>
      <Slider />

      <LayoutWrapper>
        <section id="results">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium mb-4 md:mb-10 lg:mb-16"></h2>
          <SectionTitle text={"Resultados que importan  "} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="hidden lg:flex flex-col gap-4   h-full  p-8 ">
              <div className="text-3xl font-medium">Resultados reales</div>
              <p className="text-xl mt-2 text-gray-800">
                Nuestro equipo analiza y optimiza de forma periódica los
                resultados obtenidos en cada área digital, para asegurar que
                estén alineados a los objetivos comerciales que se planteen en
                el proyecto.
              </p>
            </div>
            <FirstFigure />
            <SecondFigure />
          </div>
        </section>
      </LayoutWrapper>

      <LayoutWrapper>
        <ServicesSection />
      </LayoutWrapper>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}

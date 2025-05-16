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
import MethodSection from "./components/common/MethodSection";

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
          <SectionTitle>Resultados que importan</SectionTitle>

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
      <LayoutWrapper>
        <MethodSection />
      </LayoutWrapper>

      <motion.div className="cursor-pointer fixed right-6 bottom-6 size-16 md:size-20 bg-[#25D366] border-2 border-[#23bd5c] rounded-full flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="size-8 md:size-11"
        >
          <path
            d="M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15M14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15ZM3 21.0002L4.65 17.2002C3.38766 15.4083 2.82267 13.2172 3.06104 11.0383C3.29942 8.85939 4.32479 6.84235 5.94471 5.36573C7.56463 3.88911 9.66775 3.05443 11.8594 3.01831C14.051 2.9822 16.1805 3.74714 17.8482 5.16959C19.5159 6.59203 20.6071 8.57419 20.9172 10.7441C21.2272 12.914 20.7347 15.1224 19.5321 16.955C18.3295 18.7875 16.4994 20.1182 14.3854 20.6973C12.2713 21.2764 10.0186 21.0641 8.05 20.1002L3 21.0002Z"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}

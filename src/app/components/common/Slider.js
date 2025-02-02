import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../icons";
import { Bebas_Neue } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const shortSlides = [
  {
    text: "Branding",
  },
  {
    text: "Contenido",
  },
  {
    text: "Publicidad",
  },
  {
    text: "Branding",
  },
  {
    text: "Contenido",
  },
  {
    text: "Publicidad",
  },
];

const Slider = () => {
  return (
    <div
      className={`overflow-hidden py-10 font-bold uppercase text-sm md:text-4xl text-white ${bebas.className}`}
    >
      <div className={`relative w-full  py-3 rotate-3 `}>
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 5,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {[...shortSlides, ...shortSlides].map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#101010] py-5 "
              style={{ width: `${100 / shortSlides.length}%` }}
            >
              <div className="flex items-center justify-center h-full ">
                {slide.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;

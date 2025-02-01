import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../icons";

const shorttSlides = [
  { text: "Diseño Gráfico · Branding · Contenido Audiovisual" },
];

const largeSlides = [
  { text: "Asesoramiento Comercial  Community  Management MetaADS" },
];

const Slider = () => {
  return (
    <div className=" overflow-hidden py-8 font-bold uppercase text-sm md:text-3xl text-white">
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
          {[...shorttSlides, ...shorttSlides].map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#101010] py-5 "
              style={{ width: `${100 / shorttSlides.length}%` }}
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

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StartAnimation() {
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true);
    }, 3800);
  }, []);

  return (
    <motion.div
      className="absolute top-0 h-screen w-screen flex justify-center items-center z-20  bg-primary"
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 4.2 }}
    >
      {/* Logo */}
      <div className="relative z-50 overflow-hidden">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="120"
          height="120"
          animate={{ opacity: endAnimation ? 0 : 1, y: endAnimation ? -60 : 0 }}
        >
          {/* Path 1  */}
          <motion.path
            d="M137.322 94.15V79.1042H90.6371L81.9332 96.1125H120.705L81.9332 167.635H97.5606L137.322 94.15Z"
            fill="transparent"
            stroke="#FE491F"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          {/* Path 2  */}
          <motion.path
            d="M50.6782 107.991V122.841H96.5716L106.462 105.925H67.2948L105.078 36.3652H89.4407L50.6782 107.991Z"
            fill="transparent"
            stroke="#FE491F"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Máscara para el rellenar */}
          <motion.g
            clipPath="circle(0% at 50% 50%)"
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            transition={{
              duration: 1.2,
              delay: 3,
              ease: "easeInOut",
            }}
          >
            <motion.path
              d="M137.322 94.15V79.1042H90.6371L81.9332 96.1125H120.705L81.9332 167.635H97.5606L137.322 94.15Z"
              fill="#FE491F"
            />

            <motion.path
              d="M50.6782 107.991V122.841H96.5716L106.462 105.925H67.2948L105.078 36.3652H89.4407L50.6782 107.991Z"
              fill="#FE491F"
            />
          </motion.g>

          <motion.circle
            cx="100"
            cy="100"
            r="0"
            fill="#FE491F"
            animate={{ r: [0, 80, 0] }} // Expande y luego se contrae
            transition={{
              duration: 1.2,
              delay: 2.2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.svg>
      </div>
      {/* Black page */}
      <motion.div
        className="absolute top-0 h-full w-full bg-black z-40"
        initial={{ height: "100vh" }}
        animate={{ height: "0px" }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 4.1 }}
      />
    </motion.div>
  );
}

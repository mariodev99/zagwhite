import { motion } from "framer-motion";
import { useState } from "react";

export default function PrimaryButton({ text }) {
  return (
    <motion.button className="text-white h-full font-semibold px-6 py-3 bg-[#FE491F] rounded-full text-lg md:text-2xl w-full">
      {text}
    </motion.button>
  );
}

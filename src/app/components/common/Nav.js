"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo, MenuIcon } from "../icons";

const menuItems = ["Nosotros", "Servicios", "Metodos"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 bg-white rounded-[36px] z-10 border border-gray-100  max-w-[1440px] mx-auto"
      animate={{ height: isOpen ? "auto" : "64px" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className="flex justify-between items-center  h-[64px] px-3 pr-4 font-medium text-xl">
        <Logo className="size-12" />
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <MenuIcon />
        </button>
        <div className="hidden md:flex gap-4  ">
          <div>Nosotros</div>
          <div>Servicios</div>
          <div>Metodos</div>
        </div>
        <a
          className="text-white bg-black rounded-full px-4 py-2 mb-1 hidden md:block "
          href="mailto:zagconsulto@gmail.com"
        >
          Contacto
        </a>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-4"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="py-2 font-medium text-lg"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a
                  href="#results"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="py-2 font-medium text-lg"
            >
              <a
                className="text-white bg-black rounded-full px-4 py-2 mb-1  "
                href="mailto:zagconsulto@gmail.com"
              >
                Contacto
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

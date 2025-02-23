"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo, MenuIcon } from "../icons";

const menuItems = ["Nosotros", "Trabajos", "Servicios", "Contacto"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-2 left-4 right-4 bg-white rounded-[36px] z-30 border border-gray-100"
      animate={{ height: isOpen ? "auto" : "70px" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className="flex justify-between items-center  h-[70px] px-3 pr-5">
        <Logo className="size-12" />
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <MenuIcon />
        </button>
        <div className="hidden md:flex">
          <div>Quienes somos</div>
          <div>Quienes somos</div>
          <div>Quienes somos</div>
        </div>
        <a
          className="text-white bg-black rounded-full px-3 py-2 mb-2 hidden md:block"
          href="/mailto:zagconsulto@gmail.com"
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
              >
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

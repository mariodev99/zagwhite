"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import {
//    InstagramIcon,
//   LogoIcon,
// } from "./icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "../icons";
import PrimaryButton from "./PrimaryButton";

const menuItemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export default function Nav() {
  const [open, isOpen] = useState(false);

  const router = useRouter();

  const handleClick = (e, href) => {
    if (router.pathname === href) {
      e.preventDefault(); // Evita la navegación si ya estás en la misma página
    }
    isOpen(false);
  };

  const Menu = () => (
    <>
      {/* menu desplegable*/}
      <div className="fixed right-0 top-0 h-screen w-screen md:w-[35vw] z-50 flex justify-end">
        <motion.div
          className="h-full bg-[#1a1a1a] py-10 "
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 10% 0)" }}
          initial={{ width: "0px" }}
          animate={{ width: "100%" }}
          exit={{ width: "0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="pl-20 pr-10">
            <div className="flex justify-between overflow-hidden">
              <Link href={"/"} onClick={(e) => handleClick(e, "/")}>
                <Logo height={"50px"} width={"140px"} />
              </Link>
              <motion.button
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="font-semibold uppercase"
                onClick={() => isOpen(false)}
              >
                close
              </motion.button>
            </div>

            <div className="mt-14 flex flex-col">
              links
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 188 204"
                fill="none"
              >
                <path
                  d="M137.322 94.15V79.1042H90.6371L81.9332 96.1125H120.705L81.9332 167.635H97.5606L137.322 94.15Z"
                  fill="#FE491F"
                />
                <path
                  d="M50.6782 107.991V122.841H96.5716L106.462 105.925H67.2948L105.078 36.3652H89.4407L50.6782 107.991Z"
                  fill="#FE491F"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* contenedor que da sombra al resto de la pagina */}
      <motion.div
        className=" absolute right-0 bg-black bg-opacity-70 top-0 w-screen h-full z-40 flex justify-end overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  return (
    <>
      {/* Menu: esta afuera para que tenga un contenedor padre con un height determinado: Layout: h-screen */}
      <AnimatePresence>{open && <Menu />} </AnimatePresence>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        // delay animation end
        className="fixed bg-gradient-to-t top-0 flex justify-between items-center px-5 md:px-10 py-5 z-30 w-full"
      >
        <Logo width={"50px"} height={"50px"} />
        <div className="hidden md:flex items-center justify-center flex-1 gap-4 text-lg font-semibold text-gray-200 ">
          <Link href={"/nosotros"}>Nosotros</Link>
          <Link href={"/servicios"}>Servicios</Link>
          <Link href={"/metodos"}>Metodos</Link>
        </div>
        <button className="hidden md:block font-semibold px-4 py-2 bg-gradient-to-r from-[#F63C11] via-[#FF4E25] to-[#FE491F] rounded-full text-xl">
          Contactar
        </button>
        <button
          className="uppercase font-semibold block md:hidden"
          onClick={() => isOpen(!open)}
        >
          menu
        </button>
      </motion.header>
    </>
  );
}

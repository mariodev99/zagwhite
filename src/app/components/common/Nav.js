"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import {
//    InstagramIcon,
//   LogoIcon,
// } from "./icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CloseIcon, CompleteLogo, Logo, MenuIcon } from "../icons";
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
          className="h-full bg-[#0d0d0d] pb-10 pt-5 "
          initial={{ width: "0px" }}
          animate={{ width: "100%" }}
          exit={{ width: "0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col pl-10 pr-10 h-full ">
            <div className="flex justify-between">
              <Link href={"/"} onClick={(e) => handleClick(e, "/")}>
                <CompleteLogo height={"50px"} width={"60px"} />
              </Link>
              <motion.button
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="font-semibold uppercase"
                onClick={() => isOpen(false)}
              >
                <CloseIcon />
              </motion.button>
            </div>

            <div className="h-full mt-14 flex flex-col items-center justify-around py-14 font-medium">
              <motion.div
                className="flex flex-col items-center text-5xl font-semibold gap-5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    type: "spring",
                  },
                }}
              >
                <p className="textgradient">Nosotros</p>
                <p className="textgradient">Servicios</p>
                <p className="textgradient">Metodos</p>
              </motion.div>
              <motion.div
                className="text-xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    type: "spring",
                  },
                }}
              >
                <Link href={"mailto:zagdigital@gmail.com"}>
                  zagdigital@gmail.com
                </Link>
              </motion.div>
              <div className="h-px w-full bg-gradient-to-r from-black via-gray-primary to-black "></div>
              <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    type: "spring",
                  },
                }}
              >
                <Link href={"/"}>Instagram</Link>
                <Link href={"/"}>Whatsapp</Link>
                <Link href={"/"}>Linkedin</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );

  return (
    <>
      {/* Menu: esta afuera para que tenga un contenedor padre con un height determinado: Layout: h-screen */}
      <AnimatePresence>{open && <Menu />} </AnimatePresence>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="fixed bg-gradient-to-t top-0  px-5 md:px-10 py-5 z-30 w-full  bg-white"
      >
        <div className="flex justify-between items-center border border-gray-100 rounded-full p-3 pr-6 relative z-50">
        <Logo width={"50px"} height={"50px"} />
        <div className="hidden md:flex items-center justify-center flex-1 gap-4 text-xl font-medium text-gray-300 ">
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
          <MenuIcon />
        </button>
                  
        </div>

      </motion.header>
    </>
  );
}

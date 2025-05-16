"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import SectionTitle from "./common/SectionTitle";

const services = [
  {
    icon: <Code2 className="size-8" />,
    title: "Branding",
    description:
      "Pensamos, diseñamos y gestionamos de forma estratégica la presencia de tu marca. Trabajamos en la reputación, personalidad, identidad visual y posicionamiento de tu proyecto.",
  },
  {
    icon: <Palette className="size-8" />,
    title: "Contenido",
    description:
      "Pensamos, diseñamos y gestionamos contenido de valor para todos los canales digitales en donde tenga presencia tu proyecto, de forma objetiva y estratégica.",
  },
  {
    icon: <Rocket className="size-8" />,
    title: "Publicidad",
    description:
      "Gestionamos, medimos y optimizamos campañas en Meta Ads para posicionar tu proyecto y llegar a los potenciales clientes que aún no te conocen.",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden mt-44">
      <div className="container mx-auto ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <SectionTitle>Qué hacemos</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-[30px] bg-white p-8 border border-gray-primary"
              >
                <div className="mb-4 inline-block rounded-lg bg-gray-400/10 p-3 ">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg md:text-3xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-xl">
                  {service.description}
                </p>
                <div className="absolute inset-0 rounded-2xl  opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          <div className="border w-full  hidden h-96">
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-gray-100 inline-block absolute top-0 rotate-2">
              Capacitacion
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-black text-white inline-block  absolute top-8 right-4 -rotate-2">
              Branding
            </div>{" "}
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-gray-100 inline-block absolute left-8 top-10 -rotate-3">
              Marketing
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-black text-white inline-block  absolute top-20 right-16 rotate-2">
              Contenido grafico
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-gray-100 text-black inline-block  absolute top-32 left-4 -rotate-3">
              Desarrollo web
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-black text-white inline-block  absolute top-40 right-16 rotate-2">
              Estrategia
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-gray-100 text-black inline-block  absolute top-52 left-4 rotate-6">
              Creacion audiovisual
            </div>
            <div className="text-2xl md:text-4xl w-auto rounded-full px-4 py-2 bg-black text-white inline-block  absolute top-56 right-16 rotate-2">
              Fotografia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

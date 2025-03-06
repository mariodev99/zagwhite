"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { text: "Branding", color: "bg-red-500/90" },
  { text: "UI/UX", color: "bg-blue-500/90" },
  { text: "Development", color: "bg-green-500/90" },
  { text: "Marketing", color: "bg-purple-500/90" },
  { text: "SEO", color: "bg-yellow-500/90" },
  { text: "Content", color: "bg-pink-500/90" },
  { text: "Analytics", color: "bg-indigo-500/90" },
  { text: "Social Media", color: "bg-orange-500/90" },
  { text: "Copywriting", color: "bg-teal-500/90" },
  { text: "Animation", color: "bg-cyan-500/90" },
  { text: "Video", color: "bg-rose-500/90" },
  { text: "3D Design", color: "bg-emerald-500/90" },
];

export default function FloatingServices() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black p-4">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/3 top-1/3 h-32 w-32 rounded-full bg-blue-500/30 blur-[80px] md:h-40 md:w-40" />
        <div className="absolute right-1/3 top-1/2 h-32 w-32 rounded-full bg-purple-500/30 blur-[80px] md:h-40 md:w-40" />
        <div className="absolute bottom-1/3 left-1/2 h-32 w-32 rounded-full bg-pink-500/30 blur-[80px] md:h-40 md:w-40" />
      </div>

      <div className="relative mx-auto max-w-3xl py-10 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center text-3xl font-bold text-white md:mb-16 md:text-5xl lg:text-6xl"
        >
          Our Services
        </motion.h1>

        {/* Contenedor más pequeño */}
        <div className="relative mx-auto h-[400px] w-full max-w-lg md:h-[500px]">
          {services.map((service, index) => (
            <FloatingItem
              key={service.text}
              text={service.text}
              color={service.color}
              index={index}
              mousePosition={mousePosition}
              isMobile={isMobile}
              totalItems={services.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingItem({
  text,
  color,
  index,
  mousePosition,
  isMobile,
  totalItems,
}) {
  // Función para generar posiciones más cercanas y superpuestas
  const getClusteredPosition = () => {
    // Usar funciones trigonométricas para crear un patrón más denso
    const angle = (index / totalItems) * Math.PI * 4; // Multiplicar por 4 para más "capas"

    // Factores de aleatoriedad más pronunciados
    const randomRadius = Math.sin(index * 74.123) * 0.5 + 0.8;
    const randomAngle = Math.cos(index * 45.45) * 0.4;

    // Radio base más pequeño para agrupar elementos
    const baseRadius = isMobile ? 80 : 120;

    // Crear un patrón en espiral
    const spiralFactor = (index / totalItems) * 0.8;
    const xOffset =
      Math.sin(angle + randomAngle) *
      (baseRadius * randomRadius * (1 - spiralFactor));
    const yOffset =
      Math.cos(angle + randomAngle) *
      (baseRadius * randomRadius * (1 - spiralFactor));

    // Añadir offset aleatorio para más naturalidad
    const randomOffset = {
      x: Math.sin(index * 123.456) * 30,
      y: Math.cos(index * 789.012) * 30,
    };

    if (isMobile) {
      return {
        x: xOffset * 0.7 + randomOffset.x * 0.5,
        y: yOffset * 0.7 + randomOffset.y * 0.5,
      };
    }

    return {
      x: xOffset + randomOffset.x,
      y: yOffset + randomOffset.y,
    };
  };

  const position = getClusteredPosition();

  // Animación flotante más sutil
  const floatingAnimation = {
    x: [position.x - 5, position.x + 5],
    y: [position.y - 5, position.y + 5],
    rotate: [-2, 2],
    transition: {
      duration: 2 + index * 0.2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  // Parallax más sutil
  const parallaxX = !isMobile
    ? (mousePosition.x / window.innerWidth - 0.5) * 10
    : 0;
  const parallaxY = !isMobile
    ? (mousePosition.y / window.innerHeight - 0.5) * 10
    : 0;

  // Calcular z-index dinámico basado en la posición Y
  const zIndex = Math.round((position.y + 250) * 100);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{
        opacity: 0,
        x: position.x,
        y: position.y,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingAnimation,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
      }}
      style={{
        x: position.x + parallaxX,
        y: position.y + parallaxY,
        zIndex,
      }}
      whileHover={{
        scale: 1.1,
        zIndex: 1000, // Asegurar que el elemento hover esté siempre arriba
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm md:text-base ${color}`}
        whileHover={{
          boxShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
        layoutId={`service-${index}`}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

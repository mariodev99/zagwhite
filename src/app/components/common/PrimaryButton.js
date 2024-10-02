import { motion } from "framer-motion";
import { useState } from "react";

export default function PrimaryButton({ text }) {
  const [hoverAnimation, setHoverAnimation] = useState(false);

  const sharedTransition = { duration: 0.5, type: "spring", damping: 15 };

  return (
    <motion.div
      className="h-10 md:h-14  flex items-center pl-14 cursor-pointer"
      onHoverStart={() => setHoverAnimation(true)}
      onHoverEnd={() => setHoverAnimation(false)}
    >
      <motion.div
        className="overflow-hidden h-full flex items-center justify-center aspect-[1/1] bg-primary rounded-full "
        initial={{ scale: 0 }}
        animate={{
          scale: hoverAnimation ? 1 : 0,
        }}
        transition={sharedTransition}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="16"
          fill="none"
          viewBox="0 0 22 16"
          initial={{ x: -50, rotate: 180 }}
          animate={{ x: hoverAnimation ? 0 : -50 }}
          transition={sharedTransition}
        >
          <path
            id="arrow"
            fill="currentColor"
            d="m.334 8 8 8 1.886-1.887-4.78-4.78h16.227V6.665L19 6.667H5.44l4.78-4.78L8.334 0z"
          />
        </motion.svg>
      </motion.div>

      <motion.button
        className="h-full font-medium px-3 md:px-6 bg-gradient-to-r from-[#F63C11] via-[#FF4E25] to-[#FE491F] rounded-full text-lg md:text-2xl"
        initial={{ x: "-56px" }}
        animate={{ x: hoverAnimation ? 0 : "-56px" }}
        transition={sharedTransition}
      >
        {text}
      </motion.button>
      <motion.div
        className="overflow-hidden h-full flex items-center justify-center aspect-[1/1] bg-primary rounded-full"
        initial={{ x: "-56px" }}
        animate={{ scale: hoverAnimation ? 0 : 1 }}
        transition={sharedTransition}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="16"
          fill="none"
          viewBox="0 0 22 16"
          initial={{ x: 0 }}
          animate={{ x: hoverAnimation ? -50 : 0 }}
          transition={sharedTransition}
        >
          <path
            id="arrow"
            fill="currentColor"
            d="m.334 8 8 8 1.886-1.887-4.78-4.78h16.227V6.665L19 6.667H5.44l4.78-4.78L8.334 0z"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

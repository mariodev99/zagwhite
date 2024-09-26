import { motion, useTransform } from "framer-motion";
import service_1 from "../../../public/images/service_1.jpg";
import service_2 from "../../../public/images/service_2.jpg";
import service_3 from "../../../public/images/service_3.jpg";
import service_4 from "../../../public/images/service_4.jpg";
import Image from "next/image";

const imagesList = [
  { src: service_2 },
  { src: service_1 },
  { src: service_3 },
  { src: service_4 },
  { src: service_2 },
  { src: service_1 },
  { src: service_3 },
  { src: service_4 },
  { src: service_2 },
  { src: service_1 },
  { src: service_3 },
  { src: service_4 },
];

export const ScrollSliderImages = ({ currentScroll }) => {
  // const {scrollY} = useScroll()

  const toRight = useTransform(currentScroll, [1000, 2500], [-1500, 0]);
  //   const toLeft = useTransform(currentScroll, [0, 2000], [0, -250]);

  return (
    <motion.div className="mt-20">
      {/* Derecha */}
      <div className="mb-0 md:mb-10 overflow-hidden relative md:h-80 flex justify-start">
        <motion.div
          style={{ x: toRight }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-50 flex items-center justify-end gap-10 custom-height"
        >
          {imagesList.map((image, index) => (
            <div className="overflow-hidden relative " key={index}>
              <Image src={image.src} alt="service" fill objectFit="cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

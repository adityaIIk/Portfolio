import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import nojs from "../../skilogo/nojs.png";

type Props = { directionLeft?: boolean };

function Skill7({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover w-20 h-20  md:w-24 md:h-24 xl:w-24 xl:h-24 filter group-hover:grayscale
            transition duration-300 ease-in-out"
          src={nojs}
          alt=""
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 
        w-20 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill7;

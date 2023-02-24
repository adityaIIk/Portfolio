import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bit from "../Edu/bit.png";
import { Education } from "@/typings";



type Props = {};

export default function Educard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-md items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[700px]  
    snap-center bg-[#292929] p-8 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image className="w-24 h-24 object-scale-down " 
        src={bit} 
        alt="" />
       
      </motion.div>

      <div className="text-center px-0 md:px-10 object-center">
        <h4 className="font-bold text-2xl ">Undergraduate Education</h4>
        <p className=" font-light text-xl mt-1 py-5">
          Bangalore Institute of Technology
        </p>
        <p font-light text-xl mt-1 py-5>
        
          Bengaluru, Karnataka 560004
        </p>

        <p className="uppercase py-5 text-gray-500">
          (DECEMBER 2020 - JUNE 2024)
        </p>
      </div>
    </article>
  );
}

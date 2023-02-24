import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import it from "../Edu/it.png";


type Props = {};

export default function Educard2({}: Props) {
  return (
    <article
      className="flex flex-col rounded-md items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px]  
    snap-center bg-[#292929] p-8 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image className="w-24 h-24 object-cover rounded-full  " src={it} alt="" />
       
      </motion.div>

      <div className="text-center px-0 md:px-10 object-center">
        <h4 className="font-bold text-2xl ">Primary Education</h4>
        <p className=" font-light text-xl mt-1 py-5">
          Ishan International School
        </p>
        <p font-light text-xl mt-1 py-5>
        
          Patna, Bihar 800020
        </p>

        <p className="uppercase py-5 text-gray-500">
          (June 200X - MARCH 2010)
        </p>
      </div>
    </article>
  );
}

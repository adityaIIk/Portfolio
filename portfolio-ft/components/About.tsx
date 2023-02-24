import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MS from "../Images/MY.jpeg";


type Props = {

};

export default function About({  }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="-mb-32 md:mb-0 flex-shrink-0 w-44 h-44 rounded-lg  object-scale-down    
             md:h-[1000px] md:w-[900px] xl:h-[1000px] xl:w-[900px] mx-auto"
          src={MS}
          alt=""
        />
      </motion.div>
      <div className="-mb-20 space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-md mx-auto ">
          I, Aditya, am a student studying Information Science and Engineering
          with a focus on coding and web development.I am confident that my education and focus on coding and
          web development will enable me to build a successful career in this
          rapidly-evolving field.
        </p>
      </div>
    </motion.div>
  );
}

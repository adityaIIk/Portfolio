import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://instagram.com/__.aditya._._"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/aditya-aryan-0552b0200/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://facebook.com/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/adityaIIk/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="https://gmail.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}

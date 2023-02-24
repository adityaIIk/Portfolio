import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import wa from "../projectimage/wa.png";
import tin from "../projectimage/tin.png";
import pms from "../projectimage/pms.png";

type Props = {};

function Project({}: Props) {
  const projects = [
    {
      name: "Policy-Collate",
      image: pms,
      description:
        "It is policy management system for vehicles, which shows information about all different companies providing different policies, such as Company, Policy, Car, Services and other related concepts, such as Premium, and different kinds of Insurance policies. ",
    },

    {
      name: "Weather-App",
      image: wa,
      description:
        "Weather app is a software application that provides users with real-time weather information for a particular location.",
    },
    {
      name: "Tin-Dog",
      image: tin,
      description:
        "Tindog is a visually appealing dating platform, crafted using HTML, CSS, and Bootstrap, for dog owners to find suitable matches for their canine companions.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Project
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center p-18 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image className="w-44 h-44" src={project.image} alt="" />
            </motion.div>

            <div className="space-y-2 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-md text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Project;

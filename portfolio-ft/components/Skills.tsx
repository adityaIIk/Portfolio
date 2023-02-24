import React from 'react'
import Skill from './Skill'
import Skill2 from './skillsss/Skill2'
import Skill3 from './skillsss/Skill3'
import Skill4 from './skillsss/Skill4'
import Skill5 from './skillsss/Skill5'
import Skill6 from './skillsss/Skill6'
import Skill7 from './skillsss/Skill7'
import Skill8 from './skillsss/Skill8'
import Skill9 from './skillsss/Skill9'
import Skill10 from './skillsss/Skill10'
import Skill11 from './skillsss/Skill11'
import Skill12 from './skillsss/Skill12'


import { motion } from 'framer-motion'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
      justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
        Hover over a skill for current profieciency
      </h3>

      <div className=' absolute bottom-32 xl:absolute top-52 grid grid-cols-3 gap-5'>
        <Skill/>
       <Skill2 />
        <Skill3/>
        <Skill4/>
        <Skill5/>
        <Skill6/>
        <Skill7/>
        <Skill8/>
        <Skill9/>
        <Skill10/>
        <Skill11/>
        <Skill12/>
        
      </div>




      </motion.div>

  )
}

export default Skills
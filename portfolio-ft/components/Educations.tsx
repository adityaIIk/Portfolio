import React from 'react'
import { motion } from 'framer-motion'
import Educard from './Educard'
import Educard1 from './Educard1'
import Educard2 from './Educard2'


type Props = {

}

export default function Educations({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Education
      </h3>


        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <Educard/>
            <Educard1/>
            <Educard2/>
        </div>
    </motion.div>
  )
}
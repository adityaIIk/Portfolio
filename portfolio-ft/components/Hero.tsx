import { delay } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { Cursor , useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import ML from '../Images/ML.jpeg';
import Link from 'next/link';


type Props = {

}

export default function Hero({}: Props) {

  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Aditya Aryan",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore>",
  ],
  loop: true,
  delaySpeed: 2000,

  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
       className='relative rounded-full h-32 w-32 mt-auto object-cover'
      src={ML} 
      alt=''
      width={400} height ={400} />

      <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> SOFTWARE ENGINEER</h2>
      <h1 className='text-2xl lg:text-4xl font-semibold scroll-px-10'>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor='#F7AB0A'/>
      </h1>

      <div className='pt-5'>

     <Link href ="#about">
     <button className='heroButton'>About</button>
     </Link>

     <Link href ="#education">
     <button className='heroButton'>Education</button>
     </Link>

     <Link href ="#skills">
     <button className='heroButton'>Skills</button>
     </Link>

     <Link href ="#projects">
     <button className='heroButton'>Projects</button>
     </Link>

      </div>
      </div>
     
     
    </div>
  )
}
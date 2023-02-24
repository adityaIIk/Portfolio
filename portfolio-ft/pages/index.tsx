import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Educations from "@/components/Educations";
import ML from '../Images/ML.jpeg'




const inter = Inter({ subsets: ["latin"] });

export default function Home()  {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Aditya_s Portfolio</title>
      </Head>

      {/* Header  */}
      <Header />

      {/* Hero  */}
      <section id="Hero" className="snap-start">
        <Hero />
      </section>

      {/* About   */}
      <section id="about" className="snap-center">
        <About  />
      </section>

      {/* Education  */}
      <section id="education" className="snap-center">
        <Educations />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects   */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

     
        <footer className="lg:sticky bottom-5 sm: sticky top-8 width-full cursor-pointer">
          <div className="flex items-center justify-center">

            <a href="#Hero"> <Image className="h-6 w-6 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
            
            src={ML} alt= ""  /></a>
           
          </div>
        </footer>

        
      
    </div>
  );


 
}



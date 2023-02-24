import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adityaaryan11k@gmail.com?subject=${formData.subject}
        &body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="absolute top-40">
        <div className="flex flex-col space-y-5">
          <h4 className="text-xl font-semibold text-center  ">
            I have just what you need, {" "}
            <span className="underline decoration-[#F7AB0A]/50">
               Lets Talk.
            </span>
          </h4>

          <div className="space-y-2">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-md">+91 620X69XX9</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-md"> adityaaryan11k@gmail.com </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-md"> XYZ DEV STREET </p>
            </div>
          </div>
         <div className="">

         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 "
          >
            {/* <div className=" flex space-x-2 mx-auto">
             
              
            </div> */}
           
            <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
               <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-2 px-8 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
         </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;

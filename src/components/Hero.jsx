import React from "react";
import profilePic from "../assets/bharat.webp";
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

// We will create a default function for the motion animation with its values and will use that function inside tags by passing necessary delay as function parameters
const animateMotion = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

// Function for typing Animation
const typingAnimation = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: {
      duration: 3,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="px-8 pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="flex w-full lg:w-1/2">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Bharat Harikumar"
              className="h-auto border border-neutral-900 rounded-3xl max-h-[600px] mx-auto lg:ml-40"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center mt-6 lg:items-start">
              {/* <motion.h2
                variants={typingAnimation}
                initial="initial"
                animate="animate"
                className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16">
                Bharat Harikumar
              </motion.h2> */}
              <TypeAnimation
                sequence={["Bharat Harikumar", 1000, " ", 1000]}
                speed={50}
                repeat={Infinity}
                className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16"
        
              />
              <motion.p
                variants={animateMotion(0.5)}
                initial="hidden"
                animate="visible"
                className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text">
                Full Stack Developer
              </motion.p>
              <motion.p
                variants={animateMotion(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-6 my-2 text-xl font-light leading-relaxed tracking-tighter">
                {HERO_CONTENT}
              </motion.p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-4 mb-10 text-sm bg-white rounded-full text-neutral-800">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import { BiLogoDjango } from "react-icons/bi";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "motion/react";

// function to animate the icons
const animateIcons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial= {{opacity:0, y: -100}}
      transition = {{duration : 1.5}}
      className="my-20 text-4xl text-center">Technologies</motion.h2>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial = {{ opacity:0, x: -100}}
      transition = {{duration : 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={animateIcons(2.5)}
          initial="initial"
          animate="animate">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={animateIcons(4)}
          initial="initial"
          animate="animate"
          className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={animateIcons(6)}
          initial="initial"
          animate="animate"
          className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={animateIcons(3)}
          initial="initial"
          animate="animate"
          className="p-4">
          <FaNodeJs className="text-green-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={animateIcons(5.5)}
          initial="initial"
          animate="animate"
          className="p-4">
          <SiMysql className="text-orange-300 text-7xl" />
        </motion.div>
        <motion.div
          variants={animateIcons(2.5)}
          initial="initial"
          animate="animate"
          className="p-4">
          <BiLogoDjango className="text-7xl" />
        </motion.div>
        <motion.div
          variants={animateIcons(5)}
          initial="initial"
          animate="animate"
          className="p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={animateIcons(2.5)}
          initial="initial"
          animate="animate"
          className="p-4">
          <FaBootstrap className="text-purple-500 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

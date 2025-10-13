"use client";
import {motion, AnimatePresence} from "framer-motion";

const HeroCard = () => {
  return <AnimatePresence>
    <motion.div
      whileHover={{
        perspective: "1000px",
        scale: 1.02,
        opacity: 1,
        transition: { type: "spring" }
      }}
      className="relative flex justify-center items-center px-2 pb-12 w-full md:w-[38em] opacity-80 perspective-[400px]"
    >
      <div
        className="flex flex-col gap-3 py-20 w-full hero-card top-gradient outline-1 outline-primary/30 rounded-2xl rotate-x-10 overflow-hidden">
        <div className="text-5xl">✨</div>
        <div className="text-primary">Beautiful Task Management</div>
        <div className="opacity-60 text-sm md:text-base">
          Intuitive • Powerful • Collaborative
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
};

export default HeroCard;

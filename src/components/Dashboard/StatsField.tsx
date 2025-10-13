"use client";
import {motion} from "framer-motion";

type StatsFieldProps = {
  children: React.ReactNode;
}

const StatsField = ({ children }: StatsFieldProps) => {
  return <motion.div
    initial={{ y: 0 }}
    whileHover={{ y: -4 }}
    className="relative flex flex-col justify-center items-center h-32 md:w-70 bg-neutral outline outline-primary/20 hover:outline-primary transition-colors rounded-xl overflow-hidden"
  >
    <div className="absolute flex flex-col justify-center gap-5 px-8 h-full w-full feature-card ">
      {children}
    </div>
  </motion.div>;
}

export default StatsField;

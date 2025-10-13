"use client";
import {useState} from "react";
import {motion} from "framer-motion";

import Modal from "./Modal/Modal";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <>
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px var(--primary)",
        transition: { type: "tween" }
      }}
      className="fixed bottom-5 right-5 pb-1 h-14 w-14 bg-linear-to-br from-primary to-secondary rounded-[50%] text-2xl font-semibold shadow-[0_0_10px_var(--primary)] cursor-pointer z-500"
      onClick={() => setIsOpen(true)}
    >
      +
    </motion.button>
    <Modal open={isOpen} onClose={() => setIsOpen(false)} isEdit={false} />
  </>;
}

export default AddTask;

"use client";
import {motion} from "framer-motion";
import Modal from "./Modal/Modal";
import {useState} from "react";

const TasksNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <>
    <div className="flex justify-between">
      <p className="text-xl font-semibold">Tasks</p>
      <motion.button
        whileHover={{
          y: -3,
          boxShadow: "0 0 15px var(--primary)"
        }}
        className="px-5 py-1.5 bg-linear-to-r from-primary to-secondary rounded-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        + Add Task
      </motion.button>
    </div>
    <Modal open={isOpen} onClose={() => setIsOpen(false)} />
  </>;
}

export default TasksNavigation;

"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import axios from "axios";
import type {ITask} from "@/types/common";
import Modal from "./Modal/Modal";

type ControlsProps = {
  task: ITask;
}

const Controls = ({ task }: ControlsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTask = async () => {
    await axios.delete("/api/task/" + task._id);
    window.location.reload();
  };

  const handleCompleteTask = async () => {
    await axios.post("/api/task/" + task._id);
    window.location.reload();
  };

  return <>
    <div className="flex items-center gap-2 text-xs">
      <motion.button
        whileHover={{ y: -2 }}
        className="px-3 py-1.5 bg-success rounded-lg cursor-pointer"
        onClick={handleCompleteTask}
      >
        Complete
      </motion.button>
      <motion.button
        whileHover={{ y: -2 }}
        className="px-3 py-1.5 bg-tertiary rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </motion.button>
      <motion.button
        whileHover={{ y: -2 }}
        className="px-3 py-1.5 bg-warning-1 rounded-lg cursor-pointer"
        onClick={handleDeleteTask}
      >
        Delete
      </motion.button>
    </div>
    <Modal open={isOpen} onClose={() => setIsOpen(false)} task={task} isEdit={true} />
  </>;
}

export default Controls;

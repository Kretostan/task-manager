import {motion} from "framer-motion";
import type {RefObject} from "react";
import Image from "next/image";

type ModalHeaderProps = {
  ref: RefObject<HTMLDialogElement | null>;
  closeModal: (ref: HTMLDialogElement) => void;
};

const ModalHeader = ({ ref, closeModal }: ModalHeaderProps) => {
  return <div className="flex flex-col justify-center gap-4 px-8 pb-6 w-full border-b-1 border-primary/20">
    <div className="flex justify-between items-center">
      <h3 className="title-gradient font-semibold text-2xl">Add New Task</h3>
      <motion.button
        whileHover={{ rotate: 90, backgroundColor: "var(--primary)" }}
        style={{ backgroundColor: "rgba(187, 134, 252, 0.2)" }}
        className="flex justify-center items-center h-9 w-9 rounded-[50%] cursor-pointer"
        onClick={() => ref.current && closeModal(ref.current)}
      ><Image src="/icons/close.svg" alt="Close" height="15" width="15" /></motion.button>
    </div>
    <p className="text-sm text-text/50">Create a new task to stay organized and productive</p>
  </div>
}

export default ModalHeader;

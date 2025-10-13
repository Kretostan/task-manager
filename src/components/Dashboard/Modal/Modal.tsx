"use client";
import {type FormEvent, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

import type {ITask} from "@/types/common";

import ModalHeader from "@/components/Dashboard/Modal/ModalHeader";
import ModalButtons from "@/components/Dashboard/Modal/ModalButtons";
import ModalForm from "@/components/Dashboard/Modal/ModalForm";
import axios from "axios";
import {useSession} from "next-auth/react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  task?: ITask;
  isEdit: boolean;
};

const Modal = ({ open, onClose, task, isEdit }: ModalProps) => {
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();
  const [newTask, setNewTask] = useState<ITask>(task ? task : {
    title: "",
    description: "",
    priority: "Low",
    dueDate: new Date().toLocaleDateString("en-CA"),
    dueTime: "18:00",
    _id: "",
  });

  useEffect(() => {
    const modal = document.getElementById("modal");
    setModalContainer(modal);
  }, []);

  const handleCloseModal = (ref: HTMLDialogElement) => {
    formRef.current?.reset();
    setNewTask(prevTask => {
      return { ...prevTask, dueDate: "", dueTime: "", priority: "" };
    });
    document.body.style.overflow = "";
    ref.close();
  }

  const handleSubmitTask = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const data = { ...jsonData, email: session?.user?.email, priority: newTask.priority };
    try {
      if (isEdit) {
        const response = await axios.patch("/api/task/" + task?._id, data);
        if (response.status === 200 && dialogRef.current) {
          handleCloseModal(dialogRef.current);
          window.location.reload();
        }
      } else {
        const response = await axios.post("/api/task/create", data);
        if (response.status === 201 && dialogRef.current) {
          handleCloseModal(dialogRef.current);
          window.location.reload();
        }
      }
    } catch {
      console.error("Error while creating task");
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) handleCloseModal(dialog);
  }, [open]);

  if (!open) return null;
  if (!modalContainer) return null;

  return createPortal(<>
    <div className="fixed inset-0 bg-black/25 z-1050"></div>
    <dialog ref={dialogRef} onClose={onClose} className="fixed top-5 md:top-25  left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 py-8 w-[90%] md:max-w-[600px] bg-neutral outline outline-primary/30 text-white rounded-2xl z-1051"
    >
      <ModalHeader ref={dialogRef} closeModal={handleCloseModal} isEdit={isEdit} />
      <form ref={formRef} onSubmit={handleSubmitTask} className="w-full">
        <ModalForm newTask={newTask} setNewTask={setNewTask}/>
        <ModalButtons ref={dialogRef} closeModal={handleCloseModal} isEdit={isEdit} />
      </form>
    </dialog>
  </>, modalContainer);
};

export default Modal;

"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import type {ITask} from "@/types/common";
import FormField from "@/components/Auth/FormField";

type ModalFormType = {
  newTask: ITask;
  setNewTask: React.Dispatch<React.SetStateAction<ITask>>;
};

const ModalForm = ({ newTask, setNewTask }: ModalFormType) => {
  const [activePriority, setActivePriority] = useState<string>("Low");

  return <div className="flex flex-col gap-6 px-8 w-full text-sm font-semibold">
    <FormField name="title" type="text" placeholder="Enter task title" value={newTask?.title} onChange={(e) => {
      setNewTask((prevState) => {
        return {...prevState, title: e.target.value};
      });
    }}><p className="text-white">Task Title</p></FormField>
    <FormField textarea={true} name="description" type="text" placeholder="Descripe your task in detail..." value={newTask?.description} onChange={(e) => {
        setNewTask((prevState) => {
          return {...prevState, description: e.target.value};
        });
      }}><p className="text-white">Description</p></FormField>
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold">Priority Level</p>
      <div className="flex flex-col md:flex-row gap-4" key={activePriority}>
        <motion.button whileHover={{ backgroundColor: "var(--warning-1)" }} type="button" className={`flex flex-col py-2.5 w-full ${activePriority === "High" ? "bg-warning-1" : "bg-background"} ring-2 ring-warning-1 rounded-lg cursor-pointer`} onClick={() => {
          setActivePriority("High");
          setNewTask((prevState) => {
            return {...prevState, priority: "High"};
          })
        }}>High</motion.button>
        <motion.button whileHover={{ backgroundColor: "var(--warning)" }} type="button" className={`flex flex-col py-2.5 w-full ${activePriority === "Medium" ? "bg-warning" : "bg-background"} bg-background ring-2 ring-warning rounded-lg cursor-pointer`} onClick={() => {
          setActivePriority("Medium");
          setNewTask((prevState) => {
            return {...prevState, priority: "Medium"};
          })
        }}>Medium</motion.button>
        <motion.button whileHover={{ backgroundColor: "var(--success)" }} type="button" className={`flex flex-col py-2.5 w-full ${activePriority === "Low" ? "bg-success" : "bg-background"} bg-background ring-2 ring-success/30 rounded-lg cursor-pointer`} onClick={() => {
          setActivePriority("Low");
          setNewTask((prevState) => {
            return {...prevState, priority: "Low"};
          })
        }}>Low</motion.button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-4">
        <FormField name="dueDate" type="date" className="w-full" value={newTask?.dueDate} onChange={(e) => {
          setNewTask((prevState) => {
            return {...prevState, dueDate: e.target.value};
          });
        }}>Due Date</FormField>
        <motion.button
          type="button"
          whileHover={{
            y: -3,
            backgroundColor: "var(--secondary)"
          }}
          className="mt-auto px-4 py-3 bg-tertiary rounded-lg w-full cursor-pointer"
          onClick={() => {
            setNewTask(prevTask => {
              return { ...prevTask, dueDate: new Date().toLocaleDateString("en-CA") };
            });
          }}
        >
          Today
        </motion.button>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-4">
        <FormField name="dueTime" type="time" className="w-full" value={newTask?.dueTime} onChange={(e) => {
          setNewTask((prevState) => {
            return {...prevState, dueTime: e.target.value};
          });
        }}>Due Time</FormField>
        <motion.button
          type="button"
          whileHover={{
            y: -3,
            backgroundColor: "var(--secondary)"
          }}
          className="mt-auto py-3 bg-tertiary rounded-lg w-full cursor-pointer"
          onClick={() => setNewTask(prevTask => {
            return { ...prevTask, dueTime: "18:00" };
          })}
        >
          End of Day
        </motion.button>
      </div>
    </div>
  </div>;
}

export default ModalForm;

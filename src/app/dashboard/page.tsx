"use client";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Stats from "@/components/Dashboard/Stats";
import Tasks from "@/components/Dashboard/Tasks";
import AddTask from "@/components/Dashboard/AddTask";
import {useEffect, useState} from "react";
import {IStats, ITask} from "@/types/common";
import axios from "axios";

const DashboardPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskStats, setTaskStats] = useState<IStats>({
    total: tasks.length,
    completed: 0,
    inProgress: 0,
    rate: 0
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("/api/tasks")
      if (response.status === 200) {
        setTasks(response.data.tasks);
      }
    }
    fetchTasks();
    if (tasks.length > 0) {
      setTaskStats({
        total: tasks.length,
        completed: 0,
        inProgress: tasks.length,
        rate: 0
      });
    }
  }, [setTasks, tasks.length]);

  // TODO: Loading Spinner
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return router.replace("/");
  return <div className="relative flex flex-col gap-8 min-h-screen max-w-[1200px]">
    <Stats stats={taskStats} />
    <Tasks tasks={tasks} />
    <AddTask />
  </div>;
};

export default DashboardPage;

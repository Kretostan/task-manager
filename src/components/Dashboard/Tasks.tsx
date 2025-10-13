import TaskCard from "./Task";
import type {ITask} from "@/types/common";
import TasksNavigation from "./TasksNavigation";

const Tasks = ({ tasks }: { tasks: ITask[]}) => {
  return <div className="flex flex-col gap-5 sm:mx-4 mb-30 px-4 md:px-6 py-7 bg-neutral outline outline-primary/20 rounded-xl">
    <TasksNavigation />
    <div className="flex flex-col gap-5">
      {tasks.length === 0 ? "No tasks yet." : tasks.map((task, index) => <div className="flex flex-col gap-3 px-4 py-5 md:px-5 md:py-6 bg-background outline outline-secondary/20 hover:outline-primary transition-colors rounded-xl" key={index}>
        <TaskCard task={task} />
      </div>)}
    </div>
  </div>;
};

export default Tasks;

import Controls from "./TaskControls";
import type {ITask} from "@/types/common";

type TaskProps = {
  task: ITask;
}

const TaskCard = ({ task }: TaskProps) => {
  const date = new Date();
  let dueDate;
  if (task.dueDate) dueDate = new Date(task.dueDate).toLocaleDateString("pl-PL");
  const today = date.toLocaleDateString("pl-PL");
  date.setDate(date.getDate() + 1);
  const tomorrow = new Date(date).toLocaleDateString("pl-PL");

  let due = dueDate;
  if (dueDate === today) {
    due = "Today, " + task.dueTime;
  }
  if (dueDate === tomorrow) {
    due = "Tomorrow, " + task.dueTime;
  }

  let priorityBackground = "";
  let priorityText = "";
  switch (task.priority) {
    case "High":
      priorityBackground = "bg-warning-1/20";
      priorityText = "text-warning-1";
      break;
    case "Medium":
      priorityBackground = "bg-warning/20";
      priorityText = "text-warning";
      break;
    case "Low":
      priorityBackground = "bg-success/20";
      priorityText = "text-success";
      break;
  }

  return <>
    <div className="flex justify-between">
      <h3 className="font-semibold">{task.title}</h3>
      <p className={`flex items-center px-3 py-1 ${priorityText} rounded-xl text-sm ${priorityBackground}`}>{task.priority}</p>
    </div>
    <div className="flex flex-col gap-5">
      <p className="text-sm text-text/70">{task.description}</p>
      <div className="flex justify-between gap-5">
        <p className="text-xs text-text/40">Due: {due}</p>
        <Controls task={task} />
      </div>
    </div>
  </>;
}

export default TaskCard;

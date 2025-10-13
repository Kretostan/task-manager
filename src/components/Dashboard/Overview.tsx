import {Session} from "next-auth";
import Stats from "@/components/Dashboard/Stats";
import Tasks from "@/components/Dashboard/Tasks";

const Overview = ({ session }: { session: Session }) => {
  if (!session?.user || !session?.user?.tasks) return null;
  // TODO: Loading Spinner
  return <div className="flex flex-col gap-6">
    <Stats stats={{
      total: 0,
      completed: 0,
      inProgress: 0,
      rate: 0
    }} />
    <Tasks tasks={session?.user?.tasks} />
  </div>;
};

export default Overview;

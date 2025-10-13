import {getServerSession} from "next-auth";
import AddTask from "@/components/Dashboard/AddTask";
import Overview from "@/components/Dashboard/Overview";
import {authOptions} from "@/lib/auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return <div className="relative flex flex-col gap-8 min-h-screen max-w-[1200px] w-full">
    {session && <Overview session={session} />}
    <AddTask />
  </div>;
};

export default DashboardPage;

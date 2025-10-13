import {DefaultSession} from "next-auth";
import {IStats, ITask} from "@/types/common";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;

      tasks?: ITask[];
      stats?: IStats;
    } & DefaultSession["user"];
  }
}

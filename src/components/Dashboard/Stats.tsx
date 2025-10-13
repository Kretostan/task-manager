import StatsField from "./StatsField";
import {IStats} from "@/types/common";

interface StatsInterface {
  stats: IStats;
}

const Stats = ({ stats }: StatsInterface) => {
  return <div className="flex flex-col justify-center md:flex-row md:w-full flex-wrap gap-6">
    <StatsField>
      <p className="text-primary text-3xl font-bold">{stats.total}</p>
      <p className="opacity-70 text-sm">Total Tasks</p>
    </StatsField>
    <StatsField>
      <p className="text-success text-3xl font-bold">{stats.completed}</p>
      <p className="opacity-70 text-sm">Completed</p>
    </StatsField>
    <StatsField>
      <p className="text-warning text-3xl font-bold">{stats.inProgress}</p>
      <p className="opacity-70 text-sm">In Progress</p>
    </StatsField>
    <StatsField>
      <p className="text-tertiary text-3xl font-bold">{stats.rate}%</p>
      <p className="opacity-70 text-sm">Completion Rates</p>
    </StatsField>
  </div>;
}

export default Stats;

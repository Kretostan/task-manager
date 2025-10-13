export interface IUser {
  _id?: string;
  provider: string;
  providerId?: string;
  name: string;
  email: string;
  password?: string;
  tasks?: ITask[];
  stats?: IStats;
}

export interface ITask {
  _id?: string;
  title: string;
  description: string;
  priority?: string;
  dueDate?: string;
  dueTime?: string;
  user?: IUser;
}

export interface IStats {
  total: number;
  completed: number;
  inProgress: number;
  rate: number;
}

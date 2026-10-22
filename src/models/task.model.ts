export type Task = {
  id: number;
  title: string;
  description?: string | undefined;
  completed: boolean;
  createdAt: Date;
};

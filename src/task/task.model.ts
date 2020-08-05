export class TaskModel {
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  PROGRESS = 'PROGRESS',
  DONE = 'DONE',
}

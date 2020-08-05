import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task.model';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(): Promise<Task[]> {
    const query = this.createQueryBuilder('task');
    return await query.getMany();
  }

  async createTask(taskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = taskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();
    return task;
  }
}

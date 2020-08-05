import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskModel } from './task.model';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  private tasks: TaskModel[] = [];

  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}

  getTasks(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }

  createTask(taskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(taskDto);
  }
}

import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly loggerServices: Logger,
  ) {
    loggerServices.setContext(TaskController.name);
  }

  @Get()
  getTasks(): Promise<Task[]> {
    this.loggerServices.log('log')
    return this.taskService.getTasks();
  }

  // save(@Body() otro): TaskModel {
  // save(@Body('title') title: string, @Body('description') description: string): TaskModel {
  @Post()
  @UsePipes(ValidationPipe)
  save(@Body() taskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(taskDto);
  }
}

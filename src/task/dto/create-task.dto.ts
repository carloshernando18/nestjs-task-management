import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Ojo' })
  title: string;

  @IsNotEmpty()
  description: string;
}

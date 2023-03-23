import { PartialType } from '@nestjs/mapped-types';

export class CreateTaskDto {}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

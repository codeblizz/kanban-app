import { PartialType } from '@nestjs/mapped-types';

export class CreateBoardDto {}

export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

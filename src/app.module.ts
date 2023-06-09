import { BoardModule } from './modules/board/board.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from 'src/modules/task/task.module';

@Module({
  imports: [
    TaskModule,
    BoardModule
  ],
  controllers: [AppController],
})
export class AppModule {}

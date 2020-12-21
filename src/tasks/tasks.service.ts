import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [{ id: 1, task: 'Take out the trash' }, { id: 2, task: 'Do the laundry' }];

  getAllTasks() {
    return this.tasks;
  }

}

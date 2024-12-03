import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  get tasks() {
    return [
      {
        id: 1,
        name: 'first task',
      },
      {
        id: 2,
        name: 'second task',
      },
    ];
  }
}

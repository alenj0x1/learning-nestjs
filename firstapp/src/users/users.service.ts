import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private data = [
    {
      id: 1,
      name: 'john',
    },
    {
      id: 2,
      name: 'john',
    },
    {
      id: 3,
      name: 'john',
    },
  ];

  public create() {}

  public get users() {
    return this.data;
  }

  public update() {}

  public updateName() {}

  public delete() {}
}

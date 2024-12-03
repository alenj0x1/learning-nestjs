import { Injectable, NotFoundException } from '@nestjs/common';

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

  public create(user: any) {
    this.data.push(user);
    return this.data;
  }

  public get users() {
    return this.data;
  }

  public byId(id: number) {
    const gt = this.data.find((usr) => usr.id == id);
    if (!gt) throw new NotFoundException('user id is incorrect');

    return gt;
  }

  public update() {}

  public updateName() {}

  public delete() {}
}

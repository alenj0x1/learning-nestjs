import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  public create(user: CreateUserDto) {
    this.data.push({ ...user, id: this.data.length + 1 });
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

  public update(id: number, user: UpdateUserDto) {
    const gt = this.data.find((usr) => usr.id == id);
    if (!gt) throw new NotFoundException('user id is incorrect');

    gt.name = user.name ?? gt.name;
    return gt;
  }

  public updateName() {}

  public delete() {}
}

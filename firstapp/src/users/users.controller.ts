import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create() {
    return this.create();
  }

  @Get()
  public get() {
    return this.usersService.users;
  }

  @Put()
  public update() {
    return this.usersService.update();
  }

  @Patch()
  public updateName() {
    return this.usersService.updateName();
  }

  @Delete()
  public delete() {
    return this.usersService.delete();
  }
}

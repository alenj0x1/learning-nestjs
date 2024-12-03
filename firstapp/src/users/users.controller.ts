import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user: any) {
    return this.create(user);
  }

  @Get()
  public get(@Query() query: any) {
    console.log(query);
    return this.usersService.users;
  }

  @Get('/:id')
  public getById(@Param('id') id: number) {
    return this.usersService.byId(id);
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

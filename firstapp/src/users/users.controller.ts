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
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Put('/:id')
  public update(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
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

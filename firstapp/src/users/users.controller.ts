import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateGreetPipe } from './pipes/validate-greet/validate-greet.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  public get(@Query() query: any) {
    console.log(query);
    return this.usersService.users;
  }

  @Get('/:id')
  public getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.byId(id);
  }

  @Put('/:id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
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

  @Get('notfound')
  @HttpCode(404)
  public notFound() {
    return 'not found';
  }

  @Get('other/number/:num')
  public otherNumber(@Param('num', ParseIntPipe) num: number) {
    return num;
  }

  @Get('other/boolean/:bool')
  public otherBoolean(@Param('bool', ParseBoolPipe) bool: boolean) {
    return bool;
  }

  @Get('greet')
  public greet(
    @Query(ValidateGreetPipe)
    query: {
      name: string;
      last_name: string;
      age: number;
    },
  ) {
    return query;
  }
}

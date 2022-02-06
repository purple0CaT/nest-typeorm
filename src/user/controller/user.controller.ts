import {
  Body, Controller, Delete, Get, Param, Post, Put
} from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userBody: UserEntity) {
    return this.userService.create(userBody);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }


  @Put(':id')
  update(@Param('id') id: number, @Body() userBody: UserEntity) {
    return this.userService.update(id, userBody);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}

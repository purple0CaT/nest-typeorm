import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetEntity } from '../entities/pet.entity';
import { PetService } from '../services/pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Post()
  create(@Body() userBody: PetEntity) {
    return this.petService.create(userBody);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userBody: PetEntity) {
    return this.petService.update(id, userBody);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petService.remove(id);
  }
}

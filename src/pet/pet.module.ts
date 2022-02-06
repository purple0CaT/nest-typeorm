import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './controller/pet.controller';
import { PetEntity } from './entities/pet.entity';
import { PetService } from './services/pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}

/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PetEntity } from '../entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity) private petsRepo: Repository<PetEntity>,
  ) {}
  create(userBody: PetEntity): Promise<PetEntity> {
    const newUser = this.petsRepo.create(userBody);
    return this.petsRepo.save(newUser);
  }
  findAll(): Promise<PetEntity[]> {
    return this.petsRepo.find({ relations: ['owner'] });
  }
  async findOne(id: number): Promise<PetEntity> {
    try {
      const user = await this.petsRepo.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async update(id: number, userBody: PetEntity): Promise<UpdateResult> {
    try {
      const user = await this.petsRepo.update(id, userBody);
      return user;
    } catch (error) {
      throw error;
    }
  }
  remove(id: number): Promise<DeleteResult> {
    return this.petsRepo.delete(id);
  }
}

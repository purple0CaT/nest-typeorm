import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private usersRepo: Repository<UserEntity>,
  ) {}
  create(userBody: UserEntity): Promise<UserEntity> {
    const newUser = this.usersRepo.create(userBody);
    return this.usersRepo.save(newUser);
  }
  findAll(): Promise<UserEntity[]> {
    return this.usersRepo.find({ relations: ['pets'] });
  }
  async findOne(id: number): Promise<UserEntity> {
    try {
      const user = await this.usersRepo.findOneOrFail(id, {
        relations: ['pets'],
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async update(id: number, userBody: UserEntity): Promise<UpdateResult> {
    try {
      const user = await this.usersRepo.update(id, userBody);
      return user;
    } catch (error) {
      throw error;
    }
  }
  remove(id: number): Promise<DeleteResult> {
    return this.usersRepo.delete(id);
  }
}

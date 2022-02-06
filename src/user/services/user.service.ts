import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
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
    return this.usersRepo.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    try {
      const user = await this.usersRepo.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

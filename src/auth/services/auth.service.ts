/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(UserEntity) private userService: Repository<UserEntity>,
    private userService: UserService,
  ) {}
  //
  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }
}

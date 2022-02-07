import { PetEntity } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany((type) => PetEntity, (pet) => pet.owner)
  pets: PetEntity[];
}

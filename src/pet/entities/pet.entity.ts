import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet')
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: string;

  @Column()
  name: string;

  @ManyToOne((type) => UserEntity, (user) => user.pets)
  owner: UserEntity;
}

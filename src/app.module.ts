import { PetModule } from './pet/pet.module';
import { PetService } from './pet/services/pet.service';
import { PetController } from './pet/controller/pet.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PetModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      // entities: ['dist/srs/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: true, // TURN OF IN PRODUCTION, MAY LOSE DATA
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

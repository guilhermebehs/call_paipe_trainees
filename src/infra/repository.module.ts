import { ClientEntity } from './entities/client.entity';
import { ClientRepository } from './repositories/client.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
dotenv.config();

const listOfRepo = TypeOrmModule.forFeature([ClientRepository]);
@Module({
  exports: [listOfRepo],
  imports: [
    listOfRepo,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [ClientEntity],
      synchronize: false,
    }),
  ],
})
export class RepositoryModule {}

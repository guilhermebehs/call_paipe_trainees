import { ClientModule } from './v1/client/client.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from './infra/repository.module';

@Module({
  imports: [RepositoryModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

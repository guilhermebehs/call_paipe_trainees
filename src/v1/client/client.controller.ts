import { ClientEntity } from './../../infra/entities/client.entity';
import { ClientService } from './client.service';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { ClientRequest } from './infra/request/clientRequest';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async store(@Body() body: ClientRequest): Promise<ClientEntity> {
    const result = await this.clientService.store(body);
    return result;
  }

  @Get()
  async getAll(): Promise<ClientEntity[]> {
    const result = await this.clientService.getAll();
    return result;
  }
}

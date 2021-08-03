import { ClientEntity } from './../../infra/entities/client.entity';
import { ClientRepository } from './../../infra/repositories/client.repository';
import { ClientRequest } from './infra/request/clientRequest';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async store(clientRequest: ClientRequest): Promise<ClientEntity> {
    return this.clientRepository.store(clientRequest);
  }

  async getAll(): Promise<ClientEntity[]> {
    return this.clientRepository.getAll();
  }
}

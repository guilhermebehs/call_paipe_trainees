import { ClientRequest } from '../../v1/client/infra/request/clientRequest';
import { EntityRepository, Repository } from 'typeorm';
import { ClientEntity } from './../entities/client.entity';

@EntityRepository(ClientEntity)
export class ClientRepository extends Repository<ClientEntity> {
  async store(client: ClientRequest): Promise<ClientEntity> {
    try {
      const newClient = this.create(client);
      return await this.save(newClient);
    } catch (e) {
      throw new Error('Internal Error');
    }
  }
  async getAll(): Promise<ClientEntity[]> {
    try {
      return await this.find();
    } catch (e) {
      throw new Error('Internal Error');
    }
  }
}

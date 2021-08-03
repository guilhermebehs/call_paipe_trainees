import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;
  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;
  @Column({ name: 'birthday', type: 'varchar', nullable: false })
  birthday: string;
}

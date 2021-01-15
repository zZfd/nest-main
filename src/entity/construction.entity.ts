import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('construction')
export class ConstructionEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 50 })
  construction_name: string;

  @Column('bigint')
  user_id: number;

  @Column('nvarchar', { length: 200 })
  address: string;

  @Column('varchar', { length: 11 })
  phone: string;
}

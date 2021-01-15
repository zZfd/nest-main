import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('design')
export class DesignEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 30 })
  designname: string;

  @Column('bigint')
  user_id: number;

  @Column('nvarchar', { length: 50 })
  address: string;

  @Column('varchar', { length: 11 })
  phone: string;
}

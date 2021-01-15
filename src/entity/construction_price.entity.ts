import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('construction_price')
export class Construction_priceEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 50 })
  construction_unit: string;

  @Column('nvarchar', { length: 5 })
  contact: string;

  @Column('varchar', { length: 11 })
  phone_number: string;

  @Column('nvarchar', { length: 50 })
  address: number;

  @Column('smallint')
  construction_period: number;

  @Column('bigint')
  project_id: number;

  @Column('datetime')
  offer_time: Date;

  @Column('bigint')
  created_by: number;

  @Column('decimal', { precision: 2 })
  artificial_cost: number;

  @Column('decimal', { precision: 2 })
  material_cost: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @Column('datetime')
  deleted_at: Date;
}

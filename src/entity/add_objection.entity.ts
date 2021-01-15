import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('add_objection')
export class Add_objectionEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column('nvarchar', { length: 30 })
  advice_name: string;

  @Column('nvarchar', { length: 11 })
  phone_number: string;

  @Column('nvarchar', { length: 50 })
  address: string;

  @Column('nvarchar', { length: 200 })
  objection: string;

  @Column('nvarchar', { length: 200 })
  to_objection: string;

  @Column('bigint')
  project_id: number;

  @Column('smallint')
  result: number;

  @Column('datetime')
  time: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

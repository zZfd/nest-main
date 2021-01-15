import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('illegal_file')
export class Illegal_fileEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 200 })
  path: string;

  @Column('nvarchar', { length: 50 })
  filename: string;

  @Column('nvarchar', { length: 50 })
  type: string;

  @Column('smallint')
  illegal_behavior_id: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @Column('datetime')
  deleted_at: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('filemanagement')
export class FilemanagementEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  project_id: number;

  @Column('nvarchar', { length: 200 })
  path: string;

  @Column('nvarchar', { length: 50 })
  filename: string;

  @Column('nvarchar', { length: 50 })
  type: string;

  @Column('bigint')
  created_by: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
  @Column('datetime')
  deleted_at: Date;
}

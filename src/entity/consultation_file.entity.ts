import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('consultation_file')
export class Consultation_fileEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 200 })
  path: string;

  @Column('bigint')
  room_id: number;

  @Column('nvarchar', { length: 50 })
  filename: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @Column('datetime')
  deleted_at: Date;
}

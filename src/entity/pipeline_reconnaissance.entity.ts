import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pipeline_reconnaissance')
export class Pipeline_reconnaissanceEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  project_id: number;

  @Column('nvarchar', { length: 50 })
  type: string;

  @Column('nvarchar', { length: 20 })
  unit: string;

  @Column('nvarchar', { length: 20 })
  whether_complete: string;

  @Column('text')
  note: string;

  @Column('datetime')
  complete_time: Date;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

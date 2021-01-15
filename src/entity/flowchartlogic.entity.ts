import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('flowchartlogic')
export class FlowchartlogicEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  project_id: number;

  @Column('nvarchar', { length: 30 })
  now_type: string;

  @Column('nvarchar', { length: 10 })
  whether_through: string;

  @Column('nvarchar', { length: 100 })
  note: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('illegal_behavior')
export class Illegal_behaviorEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('datetime')
  time: Date;

  @Column('text')
  description: string;

  @Column('text')
  response: string;

  @Column('text')
  to_response: string;

  @Column('smallint')
  result: number;

  @Column('bigint')
  project_id: number;

  @Column('bigint')
  created_by: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

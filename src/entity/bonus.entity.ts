import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bonus')
export class BonusEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('decimal', { precision: 2 })
  money: number;

  @Column('bigint')
  project_id: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

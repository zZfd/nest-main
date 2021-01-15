import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('community_review')
export class Community_reviewEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 200 })
  review_opinions: string;

  @Column('int')
  review_results: string;

  @Column('bigint')
  project_id: number;

  @Column('bigint')
  filemanagement_id: number;

  @Column('int')
  type: number;

  @Column({ nullable: true })
  audit_by: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

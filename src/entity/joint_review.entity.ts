import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('joint_view')
export class Joint_reviewEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('text')
  review_opinions: string;

  @Column('nvarchar', { length: 200 })
  review_results: string;

  @Column('bigint')
  project_id: number;

  @Column('bigint')
  filemanagement_id: number;
}

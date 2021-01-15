import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('street_review')
export class Street_reviewEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('text')
  review_opinions: string;

  @Column('bigint')
  filemanagement_id: number;

  @Column('nvarchar', { length: 20 })
  review_result: string;
}

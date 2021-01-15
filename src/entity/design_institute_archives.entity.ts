import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('design_institute_archives')
export class Design_institute_archivesEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  project_id: number;

  @Column('nvarchar', { length: 30 })
  drawing_paper_type: string;

  @Column('bit')
  whether_complete: boolean;

  @Column('nvarchar', { length: 30 })
  completed_at: string;
}

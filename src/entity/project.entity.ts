import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('nvarchar', { length: 100 })
  project_name: string;

  @Column('nvarchar', { length: 5 })
  applicant_name: string;

  @Column('varchar', { length: 11 })
  phone_number: string;

  @Column('nvarchar', { length: 10 })
  city: string;

  @Column('nvarchar', { length: 10 })
  area: string;

  @Column('nvarchar', { length: 10 })
  street: string;

  @Column('nvarchar', { length: 10 })
  community: string;

  @Column('nvarchar', { length: 10 })
  residentialquarters: string;

  @Column('nvarchar', { length: 10 })
  building: string;

  @Column('nvarchar', { length: 10 })
  unit: string;

  @Column('int')
  design_id: number;

  @Column('int')
  device_id: number;

  @Column('int')
  devicetype_id: number;

  @Column('int', { nullable: true })
  construction_id: number;

  @Column('int', { nullable: true })
  supervision_id: number;

  @Column('bigint')
  user_id: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  // 0申请中
  @Column('smallint', { default: 0 })
  status: number;

  // 未通过
  @Column('smallint', { default: 1 })
  whether_pass: number;
}

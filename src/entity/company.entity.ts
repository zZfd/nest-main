import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  user_id: number;

  @Column('nvarchar', { length: 50 })
  company_name: string;

  @Column('nvarchar', { length: 50 })
  address: string;

  @Column('varchar', { length: 11 })
  phone: string;

  @Column('nvarchar', { length: 200 })
  article_source: string;

  @Column('nvarchar', { length: 20 })
  author: string;

  @Column('nvarchar', { length: 200 })
  link: string;

  @Column('text')
  introduction: string;
}

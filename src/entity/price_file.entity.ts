import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('price_file')
export class Price_fileEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 200 })
  path: string;

  @Column('nvarchar', { length: 50 })
  filename: string;

  @Column('bigint')
  construction_price_id: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @Column('datetime')
  deleted_at: Date;
}

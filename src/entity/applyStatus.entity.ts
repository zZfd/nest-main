import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applyStatus')
export class ApplyStatusEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('smallint')
  status: string;
}

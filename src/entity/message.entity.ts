import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('bigint')
  project_id: number;

  @Column('nvarchar', { length: 200 })
  path: string;

  @Column('nvarchar', { length: 50 })
  type: string;

  @Column('datetime')
  startTime: Date;

  @Column('datetime')
  endTime: Date;
}

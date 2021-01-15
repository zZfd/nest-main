import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('community')
export class CommunityEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('nvarchar', { length: 10 })
  code: string;

  @Column('nvarchar', { length: 10 })
  name: string;

  @Column('int')
  street_id: number;
}

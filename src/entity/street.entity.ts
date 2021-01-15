import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('street')
export class StreetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('nvarchar', { length: 20 })
  code: string;

  @Column('nvarchar', { length: 20 })
  name: string;

  @Column('int')
  area_id: number;
}

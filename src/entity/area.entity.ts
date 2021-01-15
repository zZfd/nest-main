import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('area')
export class AreaEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('nvarchar', { length: 10 })
  code: string;

  @Column('nvarchar', { length: 10 })
  name: string;

  @Column('int')
  city_id: number;
}

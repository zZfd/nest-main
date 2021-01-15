import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('nvarchar', { length: 10 })
  code: string;

  @Column('nvarchar', { length: 10 })
  name: string;
}

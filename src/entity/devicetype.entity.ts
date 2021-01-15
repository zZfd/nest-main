import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devicetype')
export class DevicetypeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 20 })
  type: string;

  @Column('bigint')
  elevatorequipment_id: number;
}

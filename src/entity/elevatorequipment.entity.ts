import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('elevatorequipment')
export class ElevatorequipmentEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 50 })
  devicename: string;

  @Column('bigint')
  user_id: number;

  @Column('nvarchar', { length: 50 })
  address: string;

  @Column('varchar', { length: 11 })
  phone: string;
}

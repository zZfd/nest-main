import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permission')
export class PermissionEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 200 })
  permission: string;
}

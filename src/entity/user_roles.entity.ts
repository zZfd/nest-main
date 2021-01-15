import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_roles')
export class User_rolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  user_id: number;

  @Column('bigint')
  role_id: number;
}

/*
 * @Author: zfd
 * @Date: 2020-12-03 14:57:29
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-09 10:34:13
 * @Description:
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('supervision')
export class SupervisionEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('nvarchar', { length: 5 })
  supervision_name: string;

  @Column('bigint')
  user_id: number;

  @Column('nvarchar', { length: 50 })
  address: string;

  @Column('varchar', { length: 11 })
  phone: string;
}

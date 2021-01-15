/*
 * @Author: zfd
 * @Date: 2020-12-03 14:19:56
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-09 11:09:31
 * @Description: 用户 角色表
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('nvarchar', { length: 50 })
  username: string;

  @Column('nvarchar', { length: 200 })
  password: string;

  @Column('varchar', { length: 11 })
  phonenumber: string;

  @Column('nvarchar', { length: 18 })
  idcard: string;

  @Column('int')
  city: string;

  @Column('int')
  area: string;

  @Column('int')
  street: string;

  @Column('int')
  community: number;

  @Column('nvarchar', { length: 50 })
  address: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

/*
 * @Author: zfd
 * @Date: 2020-12-03 14:19:56
 * @LastEditors: zfd
 * @LastEditTime: 2020-02-04 11:09:31
 * @Description: 员工表
 */

import { Entity, Column, PrimaryColumn, ManyToMany, OneToOne } from 'typeorm';
import { TimeEntity } from './commonEntity';
import { RoleEntity } from './role.entity';
import { JoinColumn, JoinTable } from 'typeorm/browser';
import { AddressEntity } from './address.entity';

@Entity({ name: 'staff' })
export class StaffEntity {
  // 手机号，主键
  @PrimaryColumn()
  phone: number;

  // 真实姓名
  @Column('nvarchar', { length: 20 })
  name: string;

  // 身份证
  @Column('nvarchar', { length: 18 })
  idCard: string;

  // 员工，角色多对多关系
  @ManyToMany((type) => RoleEntity, (role) => role.staffs)
  @JoinTable()
  roles: RoleEntity[];

  // 健康证,可为空
  @Column('nvarchar', { length: 18, nullable: true })
  healthCert: string;

  // 地址外键
  @OneToOne((type) => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  // 备注，可为空
  @Column('nvarchar', { length: 200, nullable: true })
  description: string;

  // 是否在职
  @Column('bit')
  isOnline: boolean;

  // 入职时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;
}

/*
 * @Author: zfd
 * @Date: 2020-12-03 14:19:56
 * @LastEditors: zfd
 * @LastEditTime: 2020-02-04 11:09:31
 * @Description: 角色表
 */

import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { StaffEntity } from './staff.entity';

@Entity({ name: 'role' })
export class RoleEntity {
  // 主键自增
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  // 角色名
  @Column('nvarchar', { length: 20 })
  name: string;

  // 父角色,可为空
  @Column('int', { nullable: true })
  parent: number;

  // 薪资
  @Column('int')
  salary: number;

  // 是否有效
  @Column('bit')
  isValid: boolean;

  // 员工，角色多对多关系
  @ManyToMany((type) => StaffEntity, (staff) => staff.roles)
  staffs: StaffEntity[];
}

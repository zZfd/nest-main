import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { AddressEntity } from './address.entity';
// import { JoinColumn } from 'typeorm/browser';
import { TimeEntity } from './commonEntity';

@Entity('supplier')
export class SupplierEntity {
  // 手机号，主键
  @PrimaryColumn()
  phone: number;

  // 名称
  @Column('nvarchar', { length: 20 })
  name: string;

  // 供应商类别
  @Column('nvarchar', { length: 20 })
  category: string;

  // 地址
  @OneToOne((type) => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  // 联系人
  @Column('nvarchar', { length: 20 })
  contact: string;

  // 是否仍在合作
  @Column('bit', { default: true })
  isOnline: boolean;

  // 备注，可为空
  @Column('nvarchar', { length: 200, nullable: true })
  description: string;

  // 创建时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 地区表，国家--省--市-区县 多主键
@Entity('address')
export class AddressEntity {
  // 主键
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  // 国家
  @Column('int')
  country: number;

  // 省份
  @Column('int')
  province: number;

  // 城市
  @Column('int')
  city: number;

  // 区县
  @Column('int')
  area: number;
}

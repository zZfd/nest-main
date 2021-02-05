import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StaffEntity } from './staff.entity';
import { TimeEntity } from './commonEntity';
import { StockInProductEntity } from './stockInProduct.entity';
// 区域表
@Entity('point')
export class PointEntity {
  // 主键，递增
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  // 楼层
  @Column('smallint')
  floor: number;

  // 网格
  @Column('varchar', { length: 20 })
  grid: string;

  // 货架
  @Column('varchar', { length: 20 })
  shelf: string;

  // 货架层
  @Column('smallint')
  shelfFloor: number;

  // 负责人
  @OneToOne((type) => StaffEntity)
  @JoinColumn()
  admin: StaffEntity;

  // 创建时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;

  // 备注，可为空
  @Column('nvarchar', { length: 200, nullable: true })
  description: string;

  // 是否有效
  @Column('bit', { default: true })
  isValid: boolean;

  // 一对多，产品
  @OneToMany(
    (type) => StockInProductEntity,
    (stockInProduct) => stockInProduct.point,
  )
  products: StockInProductEntity[];
}

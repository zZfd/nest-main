import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { SupplierEntity } from './supplier.entity';
import { StaffEntity } from './staff.entity';
import { TimeEntity } from './commonEntity';
import { StockInProduct } from './stockInProduct';
// 入库单
@Entity('stockInSheet')
export class StockInSheetEntity {
  // 主键，订单编号 日期 + 随机数
  @PrimaryColumn('varchar', { length: 32 })
  id: string;

  // 供应商， 可为空
  @Column((type) => SupplierEntity)
  @JoinColumn()
  supplier: SupplierEntity;

  // 采购员
  @Column((type) => StaffEntity)
  @JoinColumn()
  staff: StaffEntity;

  // 创建时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;

  // 入库单类别
  @Column('nvarchar', { length: 20 })
  category: string;

  // 备注，可为空
  @Column('nvarchar', { length: 200, nullable: true })
  description: string;

  // 状态 1. 正在入库 2. 销售中 3. 消费完毕
  @Column('smallint', { default: 0 })
  status: number;

  @OneToMany(
    (type) => StockInProduct,
    (stockInProduct) => stockInProduct.stockInSheet,
  )
  products: StockInProduct[];
}

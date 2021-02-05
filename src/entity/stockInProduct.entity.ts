import {
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
} from 'typeorm';
import { StockInSheetEntity } from './stockInSheet.entity';
import { ProductEntity } from './product.entity';
import { TimeEntity } from './commonEntity';
import { PointEntity } from './point.entity';
@Entity('stockInProduct')
export class StockInProductEntity {
  // 主键递增
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  // 一对多/多对一关系 入库单和入库单的产品
  @ManyToOne(
    (type) => StockInSheetEntity,
    (stockInSheet) => stockInSheet.products,
  )
  stockInSheet: StockInSheetEntity;

  // 产品，外键
  @OneToOne((type) => ProductEntity)
  @JoinColumn()
  product: ProductEntity;

  // 产品数量
  @Column('int')
  amount: number;

  // 进货价
  @Column('int')
  purchasePrice: number;

  // 销售价
  @Column('int')
  salePrice: number;

  // 到期时间,可为空
  @Column('date', { nullable: true })
  expirationDate: Date;

  // 待销售数量
  @Column('int')
  remainAmount: number;

  // 创建时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;

  // 备注，可为空
  @Column('nvarchar', { length: 200, nullable: true })
  description: string;

  // 是否已上架
  @Column('bit', { default: false })
  isPut: boolean;

  // 区域
  @ManyToOne((type) => PointEntity, (point) => point.products)
  point: PointEntity;
}

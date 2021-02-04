import { Column, Entity, PrimaryColumn } from 'typeorm';
import { TimeEntity } from './commonEntity';

// 产品表
@Entity('product')
export class ProductEntity {
  // 产品条码，主键
  @PrimaryColumn('varchar', { length: 18 })
  id: string;

  // 产品名称
  @Column('nvarchar', { length: 50 })
  name: string;

  // 产品英文名称,可为空
  @Column('varchar', { length: 50, nullable: true })
  nameEn: string;

  // 建议零售价
  @Column('int')
  retailPrice: number;

  // 保质期（天）
  @Column('int')
  shelfLife: number;

  // 规格型号，可为空
  @Column('nvarchar', { length: 10, nullable: true })
  specification: string;

  // 商标，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  brand: string;

  // 商标发布厂家，可为空
  @Column('nvarchar', { length: 30, nullable: true })
  producer: string;

  // 关键字，可为空
  @Column('nvarchar', { length: 30, nullable: true })
  keywords: string;

  // 包装类型，可为空
  @Column('nvarchar', { length: 50, nullable: true })
  packingType: string;

  // 形态描述，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  shapeDesc: string;

  // 描述，可为空
  @Column('nvarchar', { length: 50, nullable: true })
  description: string;

  // 原产国，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  originCountry: string;

  // 产地，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  producePlace: string;

  // 产地代码，可为空
  @Column('varchar', { length: 10, nullable: true })
  producePlaceId: string;

  // GPC分类类别代码，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  gpc: string;

  // 装配国，可为空
  @Column('nvarchar', { length: 20, nullable: true })
  installCountry: string;

  // 宽度，可为空
  @Column('float', { nullable: true })
  width: number;

  // 高度，可为空
  @Column('float', { nullable: true })
  height: number;

  // 深度，可为空
  @Column('float', { nullable: true })
  depth: number;

  // 是否为基本单元
  @Column('bit', { default: false })
  isBasic: boolean;

  // 毛重，可为空
  @Column('float', { nullable: true })
  weight: number;

  // 包装上是否标明成分
  @Column('bit', { default: false })
  isMarkElement: boolean;

  // 是否在中国信息服务平台注册
  @Column('bit', { default: true })
  isRegistered: boolean;

  // 创建时间，修改时间
  @Column((type) => TimeEntity)
  time: TimeEntity;
}

import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

// 通用类
export class TimeEntity {
  @CreateDateColumn({ type: 'datetime' })
  created: Date;

  // 修改时间
  @UpdateDateColumn({ type: 'datetime' })
  updated: Date;
}

export class AddressCommonEntity {
  // 地区编码
  @PrimaryColumn({ type: 'int' })
  id: number;

  // 名称
  @Column('nvarchar', { length: 10 })
  name: string;
}

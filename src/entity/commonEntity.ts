import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

// 通用类
export class TimeEntity {
  @CreateDateColumn({ type: 'datetime' })
  created: Date;

  // 修改时间
  @UpdateDateColumn({ type: 'datetime' })
  updated: Date;
}

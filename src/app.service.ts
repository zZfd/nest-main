/*
 * @Author: zfd
 * @Date: 2020-12-01 13:13:08
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-09 13:47:06
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { Repository, Connection, getRepository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}

  async rebuildDatabase(): Promise<string> {
    console.log(this.connection.isConnected);
    if (this.connection.isConnected) {
      await this.connection.dropDatabase();
      console.log('数据库已清空');
      await this.connection.synchronize();
      console.log('已同步数据库');
      return 'Hello World!';
    }
    return 'Hello World!';
  }

  async runMigrations(): Promise<string> {
    console.log(this.connection.isConnected);
    if (this.connection.isConnected) {
      await this.connection.runMigrations();
      console.log('迁移已运行');
      return 'Hello World!';
    }
    return 'Hello World!';
  }

  async undoMigrations(): Promise<string> {
    console.log(this.connection.isConnected);
    if (this.connection.isConnected) {
      await this.connection.undoLastMigration();
      console.log('已恢复上次执行的迁移');
      return 'Hello World!';
    }
    return 'Hello World!';
  }
}

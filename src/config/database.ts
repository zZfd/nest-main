/*
 * @Author: zfd
 * @Date: 2020-12-02 15:24:10
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 15:48:58
 * @Description: 数据库配置 采用mssql
 */
import { join } from 'path';
export default {
  type: 'mssql',
  host: '139.224.30.158',
  port: 1433,
  username: 'sa',
  password: 'zfd980323.',
  database: 'huadao',
  entities: [join(__dirname, '../', 'entity/**.entity{.ts,.js}')],
  migrationsTableName: 'custom_migration_table',
  migrations: [join(__dirname, '../', 'migration/**.migration{.ts,.js}')],
  cli: {
    migrationsDir: 'migration',
  },
  // synchronize: true // 每次运行会根据实体新建数据表
};

/*
 * @Author: zfd
 * @Date: 2020-12-01 13:13:08
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-09 10:53:07
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /**
   * 根据实体类重新创建数据库
   */
  @Get('rebuild-database')
  rebuildDatabase(): Promise<string> {
    return this.appService.rebuildDatabase();
  }

  @Get('run-migrations')
  runMigrations(): Promise<string> {
    return this.appService.runMigrations();
  }

  @Get('undo-migrations')
  undoMigrations(): Promise<string> {
    return this.appService.undoMigrations();
  }
}

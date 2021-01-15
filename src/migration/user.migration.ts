/*
 * @Author: zfd
 * @Date: 2020-12-09 13:53:51
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-09 14:05:56
 * @Description:
 */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1607493231054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "title" varchar(20)  NOT NULL `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP  COLUMN "title"`); // 恢复"up"方法所做的事情
  }
}

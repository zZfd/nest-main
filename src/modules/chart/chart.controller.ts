import { Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { ChartService } from './chart.service';
import ResponseSchema from '../../classes/response';
import { promises } from 'dns';
@Controller('/chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  /**
   * 获取正在申请中的工程数量
   * */
  @Get('applying')
  applying(): Promise<ResponseSchema> {
    return this.chartService.applying();
  }

  /**
   * 获取日/周/月/年 时间段新增的申请数量
   * */
  @Get('newApply')
  newApply(@Param() { option, start, end }): Promise<ResponseSchema> | void {
    switch (option) {
      case 0:
        return this.chartService.dayApply();
      case 1:
        return this.chartService.weekApply();
      case 2:
        return this.chartService.monthApply();
      case 3:
        return this.chartService.yearApply();
      case 4:
        return this.chartService.periodApply(start, end);
      default:
        throw new HttpException(
          {
            message: '非法请求',
            error: '非法请求',
          },
          400,
        );
        break;
    }
  }

  @Get('getCommodity')
  commodityQuery(@Param() { id }): Promise<ResponseSchema> {
    return this.chartService.commodityQuery(id);
  }

  @Get('parseHtml')
  parseHtml(): ResponseSchema | void {
    return this.chartService.parseHtml();
  }

  @Get('port')
  port(): Promise<void> {
    return this.chartService.port();
  }

  @Get('portInfo')
  portInfo() {
    return this.chartService.portInfo();
  }


  @Get('updateSession')
  updateSession() {
    return this.chartService.getNewSeesion();
  }
}

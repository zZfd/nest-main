/*
 * @Author: zfd
 * @Date: 2020-12-02 09:37:18
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 10:10:12
 * @Description: 日志中间件 client-side  --- middleware ---routehandle
 */
import { Injectable, NestMiddleware} from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req
    console.log(`中间件${method} ${path}`)
    next()
  }
}
/*
 * @Author: zfd
 * @Date: 2020-12-02 09:37:18
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 10:10:12
 * @Description: 日志中间件 client-side  --- middleware ---routehandle
 */
import { HttpException, HttpStatus, Injectable, NestMiddleware} from '@nestjs/common'
import { Request, Response, } from 'express'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req
    console.log(`中间件${method} ${path}`)
    next()
  }
}

@Injectable()
export class JWTMiddleware implements NestMiddleware {
  constructor(private jwtService:JwtService) {}
  use(req:Request, res:Response, next: () => void) {
    const authorization = req.headers['Authorization']
    if(authorization === undefined) {
      throw new HttpException(
        {
          error:'登录信息错误',
          message: '请重新登录'
        },
        HttpStatus.UNAUTHORIZED
      )
    }
    this.jwtService.verify
    const decode = this.jwtService.decode(authorization as string)
    console.log(decode)
    next()
  }
}


/*
 * @Author: zfd
 * @Date: 2020-12-02 10:44:47
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 13:40:21
 * @Description: 守卫
 */
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class NameGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const name = this.reflector.get<string>('name', context.getHandler());
    console.log('守卫', name);
    // 没有设置守卫 直接通过
    if (!name) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const {
      body: { firstName },
    } = request;
    console.log(firstName);
    // console.log(request)
    // false返回403
    // return name === firstName
    // 自定义抛出异常
    if (firstName !== name) {
      throw new HttpException(
        { message: '权限校验不通过', error: 'Unauthorization' },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

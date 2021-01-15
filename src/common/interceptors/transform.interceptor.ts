/*
 * @Author: zfd
 * @Date: 2020-12-02 13:26:38
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 13:26:39
 * @Description: 
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T,Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>):Observable<Response<T>> {
    return next.handle().pipe(map(data => ({data})))
  }
}
/*
 * @Author: zfd
 * @Date: 2020-12-02 13:15:53
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 13:26:00
 * @Description: 拦截器
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context:ExecutionContext, next: CallHandler): Observable<any>{
    console.log('Before...')
    const now = Date.now()
    return next
            .handle()
            .pipe(
              tap(() => console.log(`After... ${Date.now() - now }ms`))
            )
  }
}
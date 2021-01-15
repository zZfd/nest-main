/*
 * @Author: zfd
 * @Date: 2020-12-02 13:15:53
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 13:15:53
 * @Description: 拦截器
 */
import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common'

import { Observable, throwError  } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context:ExecutionContext, next: CallHandler): Observable<any>{
    return next
            .handle()
            .pipe(
              catchError(err => throwError(new HttpException('New message', HttpStatus.BAD_GATEWAY)))
            )
  }
}
/*
 * @Author: zfd
 * @Date: 2020-12-02 13:26:22
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 13:26:33
 * @Description: 
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(5000));
  }
}

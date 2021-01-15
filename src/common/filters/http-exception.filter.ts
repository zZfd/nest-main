/*
 * @Author: zfd
 * @Date: 2020-12-02 09:58:38
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 10:14:07
 * @Description: 错误过滤器
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { exception } from 'console';
import { ValidationError } from 'class-validator';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const exceptionRes: any = exception.getResponse();
    const { error, message } = exceptionRes;
    // if (errors.length > 0) {
    //   const errObj = {};
    //   errors.forEach(err => {
    //     const {
    //       property,
    //       constraints,
    //     } = err;
    //     errObj[property] = Object.values(constraints);
    //   });
    // }
    response.status(status).json({
      status,
      timeStamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    });
  }
}

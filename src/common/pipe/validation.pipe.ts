/*
 * @Author: zfd
 * @Date: 2020-12-02 10:27:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 10:44:25
 * @Description: 管道 client-side --- middleware --- pipe
 */

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import * as _ from 'lodash';
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metaData: ArgumentMetadata) {
    const { metatype } = metaData;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    //Logger.log(errors)
    if (errors.length > 0) {
      // 遍历全部的错误信息，返回给前端
      const errorMessage = errors.map((item) => {
        return {
          currentValue: item.value,
          [item.property]: _.values(item.constraints)[0],
        };
      });
      throw new HttpException(
        {
          message: '请求错误',
          error: errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      );
      // throw new BadRequestException(errorMessage);
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

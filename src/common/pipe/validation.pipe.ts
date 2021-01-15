/*
 * @Author: zfd
 * @Date: 2020-12-02 10:27:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 10:44:25
 * @Description: 管道 client-side --- middleware --- pipe 
 */

 import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'

 @Injectable()
 export class ValidationPipe implements PipeTransform {
   transform(value:any, metaData: ArgumentMetadata) {
     console.log('管道',value)
     console.log(metaData)
     return value
   }
 }

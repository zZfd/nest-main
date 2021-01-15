/*
 * @Author: zfd
 * @Date: 2020-12-02 11:16:51
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-02 11:16:51
 * @Description: 装饰器
 */

 import { SetMetadata } from '@nestjs/common'

 export const Name = (name: string) => SetMetadata('name',name)

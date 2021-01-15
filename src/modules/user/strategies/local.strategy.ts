/*
 * @Author: zfd
 * @Date: 2020-12-03 08:22:40
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 09:19:32
 * @Description: 
 */
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { UserService } from '../user.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super()
  }

  validate(username: string, password: string): any {
    // tslint:disable-next-line
    // console.log(username, password)
    // const user = this.authService.validateUser(username, password);
    // console.log('stratage',user)
    // if (!user) {
    //   throw new HttpException(
    //     { message: 'authorized failed', error: 'please try again later.' },
    //     HttpStatus.BAD_REQUEST);
    // }
    // return user;
  }
}

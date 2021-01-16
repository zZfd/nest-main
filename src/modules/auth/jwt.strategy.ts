/*
 * @Author: zfd
 * @Date: 2020-12-03 08:22:30
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 09:28:01
 * @Description: 
 */
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest:ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey:jwtConstants.secret
    })
  }

  validate(payload: any) {
    console.log({userId: payload.sub, username: payload.username})
    return {userId: payload.sub, username: payload.username};
  }
}
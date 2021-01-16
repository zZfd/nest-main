/*
 * @Author: zfd
 * @Date: 2020-12-03 08:22:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 10:20:29
 * @Description: 
 */

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { createDecipheriv } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  validateUser(username: string, pass: string): any {
    const user = { name: 'walker123', password: '123' };
    if (user && user.password) {
      return user;
    }
    return null;
  }

  login(user: any) {
    user.userId = '1'
    const iv = Buffer.from('5007d799c92d2f890b990adc1a93fc86', 'hex');
    
    const decipher = createDecipheriv('aes-256-ctr', '0321ebeba1f75de2d3cd3471af7418a4', iv);
    const decryptedText = Buffer.concat([
      decipher.update(user.password),
      decipher.final(),
    ]);
    console.log(decryptedText)
    const payload = { username: user.name, sub: user.userId }
    return { access_token: this.jwtService.sign(payload), username: user.name, id: user.userId }
  }
}
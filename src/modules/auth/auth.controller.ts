/*
 * @Author: zfd
 * @Date: 2020-12-03 08:21:39
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 09:23:31
 * @Description: 
 */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 登录测试
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user)
  }

   // 测试登录后才可访问的接口，在需要的地方使用守卫，可保证必须携带token才能访问
   @UseGuards(AuthGuard('jwt'))
   @Get('me')
   getProfile(@Request() req) {
     
     return req.user;
   }
}
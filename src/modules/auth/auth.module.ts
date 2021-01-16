/*
 * @Author: zfd
 * @Date: 2020-12-03 08:21:50
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 08:21:50
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({secret: jwtConstants.secret, signOptions: {expiresIn: '10m'}})
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

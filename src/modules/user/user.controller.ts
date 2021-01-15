// /*
//  * @Author: zfd
//  * @Date: 2020-12-02 08:10:27
//  * @LastEditors: zfd
//  * @LastEditTime: 2020-12-03 13:08:42
//  * @Description:
//  */
// import { Controller, Get, Body, Post, HttpException, HttpStatus, Query, UseGuards, UseInterceptors } from '@nestjs/common'
// import { UserService } from './user.service'
// import * as UserReq from './classes/user'
// import { validateSync,ValidationError } from 'class-validator'
// import { plainToClass } from 'class-transformer';
// // import { ValidationPipe } from '../../common/pipe/validation.pipe'
// // import { NameGuard } from '../../common/guards/roles.guard'
// // import { Name } from '../../common/decorators/name.decorator'
// // import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor'
// import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';
// import {
//   ApiResponse,
//   ApiTags,
//   ApiQuery,
//   ApiBearerAuth,
//   ApiBody,
//   ApiParam,
// } from '@nestjs/swagger';
// import ResponseSchema from '../../utils/response'
//
// @Controller('/user')
// // @UseGuards(NameGuard)
// // @UseInterceptors(LoggingInterceptor)
//
// export class UserController {
//   constructor(private readonly userService: UserService) { }
//
//   @Post('sign-up')
//   @ApiBody({type:UserReq.signUp})
//   @ApiResponse({
//     type: ResponseSchema
//   })
//   // @Name('123')
//   // @Body(new ValidationPipe())
//   signUp(@Body() body: UserReq.signUp) {
//     const request: UserReq.signUp = plainToClass(UserReq.signUp, body)
//     console.log(request)
//     // const request = new UserReq.signUp()
//     // request.firstName = '1'
//     const errors = validateSync(request)
//     console.log(Object.prototype.toString.call(errors))
//     console.log(errors.constructor )
//     console.log(errors instanceof ValidationError)
//     if (errors.length > 0) {
//       const errObj = {};
//       errors.forEach(err => {
//         const {
//           property,
//           constraints,
//         } = err;
//         errObj[property] = Object.values(constraints);
//       });
//       throw new HttpException(
//         {
//           message:'请求错误',
//           error: errObj
//         },
//         HttpStatus.BAD_REQUEST
//       )
//     }
//     //#region
//     // const iv = randomBytes(16);
//     // console.log(iv)
//     // console.log('iv', iv.toString('hex'))
//     // const cipher = createCipheriv('aes-256-ctr', '0321ebeba1f75de2d3cd3471af7418a4', iv);
//     // console.log('cipher')
//     // const textToEncrypt = request.password;
//     // console.log('pwd', textToEncrypt)
//     // const encryptedText = Buffer.concat([
//     //   cipher.update(textToEncrypt),
//     //   cipher.final(),
//     // ]);
//
//     // console.log('en', encryptedText);
//
//     // const iv2 = Buffer.from(iv.toString('hex'), 'hex');
//     // console.log(iv2)
//     // const decipher = createDecipheriv('aes-256-ctr', '0321ebeba1f75de2d3cd3471af7418a4', iv2);
//     // const decryptedText = Buffer.concat([
//     //   decipher.update(encryptedText),
//     //   decipher.final(),
//     // ]);
//     // console.log('de',decryptedText.toString('utf-8'))
//     //#endregion
//     return this.userService.signUp(request)
//   }
//
//   @Get('me')
//   me(@Query() { name }) {
//     return name
//   }
//
// }

// /*
//  * @Author: zfd
//  * @Date: 2020-12-02 08:10:27
//  * @LastEditors: zfd
//  * @LastEditTime: 2020-12-03 09:52:50
//  * @Description:
//  */
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, Connection, getRepository } from 'typeorm';
// import { User, Role } from '../../entity/users.entity';
// import ResponseSchema from '../../utils/response';
//
// @Injectable()
// export class UserService {
//   constructor(
//     // @InjectRepository(Role)
//     // private readonly userRepository:Repository<Role>,
//     // private connection:Connection
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//     private connection: Connection,
//   ) {}
//
//   async signUp(request): Promise<ResponseSchema> {
//     const u = await this.userRepository.findOne({
//       where: { name: request.username },
//     });
//     console.log(u);
//     if (u) {
//       throw new HttpException(
//         {
//           message: '用户已存在',
//           error: '用户已存在',
//         },
//         HttpStatus.BAD_REQUEST,
//       );
//     }
//     request.created_at = new Date();
//     request.updated_at = new Date();
//     const saveU = await this.userRepository.save(request);
//     console.log(saveU);
//     const res = new ResponseSchema();
//     res.status = HttpStatus.CREATED;
//     res.message = '注册成功';
//     res.content = saveU;
//     return res;
//   }
//
//   signIn(): string {
//     return '登录成功';
//   }
// }

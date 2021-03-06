/*
 * @Author: zfd
 * @Date: 2020-12-01 13:13:08
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 13:10:16
 * @Description:
 */
// import {} from '@nestjs/websockets'
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as csurf from 'csurf';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
// import { ValidationPipe } from '@nestjs/common';
import { ValidationPipe } from './common/pipe/validation.pipe';
// import { registerSchema } from 'class-validator'
// import * as UserValidationSchema  from "./modules/user/classes/request/validation";

// registerSchema(UserValidationSchema.signUp); // if schema is in .json file, then you can simply do registerSchema(require("path-to-schema.json"));

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 配置全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // helmet 防止网站攻击 xss等
  app.use(helmet());
  // 防止暴力破解
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  // 防止跨站请求伪造
  // app.use(csurf());
  // 允许跨域请求
  app.enableCors();

  // 开启session
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  // 全局管道验证
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalPipes(new ValidationPipe());

  // 给请求添加prefix
  // app.setGlobalPrefix('api/v1');
  // swagger文档配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nextjs learn api document')
    .setDescription('just for learn')
    .setVersion('1.0')
    .addTag('learn')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();

/*
 * @Author: zfd
 * @Date: 2020-12-01 13:13:08
 * @LastEditors: zfd
 * @LastEditTime: 2020-12-03 09:07:22
 * @Description:
 */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { StatusMonitorModule } from 'nest-status-monitor';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HelloModule } from './modules/hello/hello.module'
// import { UserModule } from './modules/user/user.module';
// import { AuthModule } from './modules/auth/auth.module';

// import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import statusMonitorConfig from './config/statusMonitor';
import { ChartModule } from './modules/chart/chart.module';

const jwtConstants = {
  secret: 'secretKey',
};
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
      // autoLoadEntities: true
    }),
    // TODO @nestjs/terminus almost the same
    StatusMonitorModule.setUp(statusMonitorConfig),
    ChartModule,
    // HelloModule,
    // UserModule,
    // AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .exclude(
  //       { path: 'user/(.*)', method: RequestMethod.GET },
  //       // 'cats/(.*)',
  //     )
  //     .forRoutes('user');
  // }
}

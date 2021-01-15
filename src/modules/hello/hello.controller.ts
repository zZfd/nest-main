import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Param,
  Body,
  Headers,
} from '@nestjs/common';
import { HelloService } from './hello.service';
import { Hello, UserRole } from './classes/hello';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
  fetch(@Query() { id }, @Headers() headers): string {
    return this.helloService.fetch(id);
  }

  // 创建
  @Post()
  save(@Body() body): string {
    console.log(body);
    return this.helloService.save(body.message);
  }

  // 更新
  @Patch(':id')
  update(@Param() params, @Body() body): string {
    console.log(params);
    console.log(body);
    return this.helloService.update(params.id, body.message);
  }

  // 删除
  @Delete()
  remove(@Query() query): string {
    console.log(query);
    return this.helloService.remove(query.id);
  }
}

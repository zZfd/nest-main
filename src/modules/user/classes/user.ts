/**
 * user 请求类
 */
import { IsMobilePhone, Matches, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class signUp {
  @IsString({ message: '需为字符串' })
  @MinLength(2, { message: '最小长度为2' })
  @ApiProperty({
    example: 'zfd',
    description: '用户名，最小长度为2，非数字开头，支持中文，非特殊符号',
  })
  username: string;

  @Matches(/^[a-zA-z0-9_.@~!?]{6,17}$/, {
    message: '请输入6-17位中英文字符组合密码',
  })
  @ApiProperty({
    example: 'zfd980323.',
    description: '请输入6-17位中英文字符组合密码',
  })
  password: string;
  // @Matches(/[a-z]{1}/,{message:'请输入至少一位小写英文字符'})
  // username: string
  @IsMobilePhone('zh-CN', { strictMode: false }, { message: '请输入手机号' })
  @ApiProperty({ example: '15988800323', description: '中国大陆手机号' })
  phone: string;
  // @Matches(/^[a-zA-z0-9_.@~!?]{6,17}$/,{message:'请输入6-17位中英文字符组合密码'})
  // password: string
}

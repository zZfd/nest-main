import {
  IsBoolean,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SupplierDto {
  @Matches(
    /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
    { message: '请输入合法的手机号' },
  )
  phone: number;

  // 名称
  @IsString({ message: '请输入合法的供应商名' })
  @MinLength(1, { message: '最小长度为1' })
  @MaxLength(20, { message: '最大长度为20' })
  name: string;

  // 供应商类别
  @IsString({ message: '请输入合法的供应商类别' })
  @MinLength(1, { message: '最小长度为1' })
  @MaxLength(20, { message: '最大长度为20' })
  category: string;

  // 地址
  @IsInt({ message: '请选择合法的地址' })
  address: number;

  // 联系人
  @IsString({ message: '请输入合法的联系人' })
  @MinLength(1, { message: '最小长度为2' })
  @MaxLength(20, { message: '最大长度为20' })
  contact: string;

  // 是否仍在合作
  @IsBoolean({ message: '请选择是否仍在合作' })
  isOnline: boolean;

  // 备注，可为空
  @IsString({ message: '请输入合法的备注' })
  @MaxLength(20, { message: '最大长度为200' })
  description: string;
}

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  UsePipes,
} from '@nestjs/common';
import { SupplierDto } from './dto/supplier.dto';
import { SupplierService } from './supplier.service';
import { ApiBody } from '@nestjs/swagger';
import { ValidationPipe } from '../../common/pipe/validation.pipe';
@Controller('/supplier')
export class SupplierController {
  constructor(private readonly supplierServices: SupplierService) {}

  @Post()
  @ApiBody({ type: SupplierDto })
  // @UsePipes(new ValidationPipe(SupplierDto))
  async create(
    @Body()
    createSupplierDto: SupplierDto,
  ) {
    Logger.log('createSupplier');
    return {
      data: createSupplierDto,
      code: HttpStatus.CREATED,
      msg: '创建成功',
    };
  }
}

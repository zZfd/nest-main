import { HttpStatus } from '@nestjs/common';

export default class ResponseSchema {
  status: HttpStatus;
  message: string;
  content: any;
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id: string | number): string {
    return `Hello World! ${id}`;
  }

  save(message: string): string {
    return `Set Hello Done.${message}`;
  }

  update(id: string | number, message: string): string {
    return `Update Hello Done. ${id}：${message}`;
  }

  remove(id: string | number): string {
    return `${id} Record was Removed.`;
  }
}

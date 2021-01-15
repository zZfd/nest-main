/**
 * 请求，响应类
 */

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  name: string;

  age: number;

  breed: string;

  role: UserRole;
}

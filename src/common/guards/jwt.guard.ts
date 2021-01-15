import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import {AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '../decorators/public.decorator'
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector:Reflector) {
    super()
  }
  canActivate(context:ExecutionContext):boolean | Promise<boolean> | Observable<boolean> {
    console.log('canActivate')
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    if(isPublic) {
      return true
    }
    return super.canActivate(context)
  }

  handleRequest(err, user, info) {
    console.log('handleRequest')
    console.log(info)
    if(user === false) {
      throw new UnauthorizedException
    }
    return user
  }
}
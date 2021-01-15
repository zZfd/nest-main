import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { jwtConstants } from 'src/config/constants'
import { InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'src/entity/user.entity'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ) {
      super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:jwtConstants.secret
      })
    }

    async validate(payload: any):Promise<boolean | {id:string,phone:string}> {
      const { id, phone } = payload
      console.log('payload',payload)
      const u = await this.userRepository.findOne({where: {id:id}})
      if(u && u.phone ===  phone) {
        return {id, phone}
      }else {
        return false
      }
    }
}
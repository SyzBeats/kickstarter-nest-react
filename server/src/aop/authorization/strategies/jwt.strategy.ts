// JwtStrategy for handling Passport JWT

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import keys from 'src/aop/keys';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: keys.jwtSecret,
    });
  }

  async validate(payload: any) {
    // validating payload here
    if (payload) {
      return 'Authenticated';
    }

    // return 401 Unauthorized error
    throw new UnauthorizedException();
  }
}

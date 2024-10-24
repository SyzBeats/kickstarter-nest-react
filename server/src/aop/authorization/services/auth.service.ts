import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppContext } from 'src/aop/http/context';
import { UsersService } from 'src/domain/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
    context: AppContext,
  ): Promise<{ access_token: string }> {
    // Todo: decide to query by email or username
    const user = await this.usersService.getById(email, context);

    if (!user) {
      throw new UnauthorizedException();
    }

    // Todo: argon2id comparison

    const payload = { sub: user._id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

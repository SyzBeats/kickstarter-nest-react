import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './strategies/jwt.strategy';
import keys from '../keys';
import { UsersDomainModule } from 'src/domain/users/users.module';
import { AuthenticationGuard } from './guards/authentication.guard';

@Module({
  imports: [
    UsersDomainModule,
    PassportModule.register({
      session: false,
    }),
    JwtModule.register({
      secret: keys.jwtSecret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy, AuthenticationGuard],
  controllers: [],
  exports: [],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersDomainModule } from 'src/domain/users/users.module';

import { JwtStrategy } from './strategies/jwt.strategy';
import keys from '../keys';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthController } from './controllers/auth.controller';
import { AuthMediator } from './mediators/auth.mediator';
import { AuthService } from './services/auth.service';
import { EncryptionService } from '../encryption/services/encryption.service';

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
	providers: [JwtStrategy, AuthenticationGuard, AuthMediator, AuthService, EncryptionService],
	controllers: [AuthController],
	exports: [],
})
export class AuthModule {}

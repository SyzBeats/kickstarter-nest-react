import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/users/entities/user';
import { SignInUserInput } from 'src/domain/users/inputs/signin-user.input';
import { EncryptionService } from 'src/aop/encryption/services/encryption.service';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		private encryptionService: EncryptionService,
	) {}

	async signIn(input: SignInUserInput, user: User): Promise<{ access_token: string }> {
		if (!user) {
			throw new UnauthorizedException();
		}

		const verified = await this.encryptionService.verify(user.password, input.password);

		if (!verified) {
			throw new UnauthorizedException();
		}

		const payload = { sub: user._id, email: user.email };

		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}

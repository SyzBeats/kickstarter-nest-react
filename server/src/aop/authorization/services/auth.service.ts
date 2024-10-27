import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/users/entities/user';
import { SignInUserInput } from 'src/domain/users/inputs/signin-user.input';

// Todo: should be in a encryption module
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

	async signIn(
		input: SignInUserInput,
		user: User,
	): Promise<{ access_token: string }> {
		if (!user) {
			throw new UnauthorizedException();
		}

		const verified = await argon2.verify(user.password, input.password);

		if (!verified) {
			throw new UnauthorizedException();
		}

		const payload = { sub: user._id, email: user.email };

		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}

	async signUp() {
		return '';
	}
}

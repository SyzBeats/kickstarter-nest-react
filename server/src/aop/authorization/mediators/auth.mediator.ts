import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/domain/users/service/users.service';
import { AppContext } from 'src/aop/http/context';
import { CreateUserInput } from 'src/domain/users/inputs/create-user.input';
import { SignInUserInput } from 'src/domain/users/inputs/signin-user.input';
import { EncryptionService } from 'src/aop/encryption/services/encryption.service';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthMediator {
	constructor(
		private authService: AuthService,
		private usersService: UsersService,
		private encryptionService: EncryptionService,
	) {}

	async signIn(input: SignInUserInput, context: AppContext) {
		const user = await this.usersService.getByEmail(input.email, context);

		if (!user) {
			throw new UnauthorizedException();
		}

		return this.authService.signIn(input, user);
	}

	async signUp(input: CreateUserInput, context: AppContext) {
		const hashedPassword = await this.encryptionService.hash(input.password);

		console.log(hashedPassword);

		const user = await this.usersService.create(
			{
				...input,
				password: hashedPassword,
			},
			context,
		);

		return this.authService.signIn(input, user);
	}
}

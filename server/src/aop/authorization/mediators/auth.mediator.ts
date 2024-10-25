import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/domain/users/service/users.service';

import { AppContext } from 'src/aop/http/context';
import { CreateUserInput } from 'src/domain/users/inputs/create-user.input';

@Injectable()
export class AuthMediator {
	constructor(
		private authService: AuthService,
		private usersService: UsersService,
	) {}

	async signIn(email: string, password: string, context: AppContext) {
		// get the user from users service
		const user = await this.usersService.getById(email, context);

		if (!user) {
			throw new UnauthorizedException();
		}

		// pass to signIn service and return token
		return this.authService.signIn(email, password, context);
	}

	async signUp(input: CreateUserInput, context: AppContext) {
		// Create the user in users service
		const user = await this.usersService.create(input, context);
		// create token and sign in / Send confirmation link etc.
		return this.authService.signIn(user.email, user.password, context);
	}
}

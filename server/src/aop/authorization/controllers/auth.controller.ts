import {
	Body,
	Controller,
	Post,
	HttpCode,
	HttpStatus,
	Req,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Public } from '../decorators/public.decorator';
import { AuthMediator } from '../mediators/auth.mediator';
import { CreateUserDto } from 'src/api/rest/users/dto/user.input-dto';
import { UserSignInDto } from 'src/api/rest/users/dto/user-sigin.dto';

@Controller('auth')
export class AuthController {
	constructor(private authMediator: AuthMediator) {}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signin')
	signIn(
		@Body() signInDto: UserSignInDto,
		@Req() request: FastifyRequest['raw'],
	) {
		return this.authMediator.signIn(signInDto, request['raw'].appContext);
	}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signup')
	signUp(
		@Body() signUpDto: CreateUserDto,
		@Req() request: FastifyRequest['raw'],
	) {
		return this.authMediator.signUp(signUpDto, request['raw'].appContext);
	}
}

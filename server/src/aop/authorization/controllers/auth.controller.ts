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
import { CreateUserDto } from 'src/api/users/dto/user.input-dto';

@Controller('auth')
export class AuthController {
	constructor(private authMediator: AuthMediator) {}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signIn')
	// Todo: implement the DTO
	signIn(
		@Body() signInDto: Record<string, any>,
		@Req() request: FastifyRequest,
	) {
		const { username, password } = signInDto;

		return this.authMediator.signIn(username, password, request.appContext);
	}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signUp')
	// Todo: implement the DTO
	signUp(@Body() signUpDto: CreateUserDto, @Req() request: FastifyRequest) {
		return this.authMediator.signUp(signUpDto, request.appContext);
	}
}

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
import { UserSignInDto } from 'src/api/users/dto/user-sigin.dto';

@Controller('auth')
export class AuthController {
	constructor(private authMediator: AuthMediator) {}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signIn')
	// Todo: implement the DTO
	signIn(@Body() signInDto: UserSignInDto, @Req() request: FastifyRequest) {
		return this.authMediator.signIn(signInDto, request.appContext);
	}

	@HttpCode(HttpStatus.OK)
	@Public()
	@Post('signUp')
	signUp(@Body() signUpDto: CreateUserDto, @Req() request: FastifyRequest) {
		return this.authMediator.signUp(signUpDto, request.appContext);
	}
}

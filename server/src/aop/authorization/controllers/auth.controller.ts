import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { FastifyRequest } from 'fastify';
import { Public } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  // Todo: implement the DTO
  signIn(
    @Body() signInDto: Record<string, any>,
    @Req() request: FastifyRequest,
  ) {
    return this.authService.signIn(
      signInDto.username,
      signInDto.password,
      request.appContext,
    );
  }
}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, } from '@nestjs/common';
import { FastifyRequest } from "fastify"
import { JwtService } from '@nestjs/jwt';
import { Reflector } from "@nestjs/core";

import keys from "../../keys";
import { IS_PUBLIC } from "../decorators/public.decorator";

@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(private jwtService: JwtService, private reflector: Reflector) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC, [
			context.getHandler(),
			context.getClass(),
		]);
		if (isPublic) {
			// 💡 See this condition
			return true;
		}

		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		if (!token) {
			throw new UnauthorizedException();
		}

		try {
			// 💡 We're assigning the payload to the request object here
			// so that we can access it in our route handlers
			request['user'] = await this.jwtService.verifyAsync(
				token,
				{
					secret: keys.jwtSecret
				}
			);
		} catch {
			throw new UnauthorizedException();
		}
		return true;
	}

	private extractTokenFromHeader(request: FastifyRequest): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}
}
import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import type { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );

    if (isPublic) {
      return true;
    }

    // @todo - JWT token validation logic goes here.
    return false;
  }
}

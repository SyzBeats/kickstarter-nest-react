import { SetMetadata } from '@nestjs/common';

/**
 * Custom decorator to mark public API endpoints
 * @returns {MethodDecorator} decorator
 */
export function Public(): MethodDecorator {
  return SetMetadata('isPublic', true);
}

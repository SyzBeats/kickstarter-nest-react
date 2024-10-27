import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class EncryptionService {
	async hash() {
		// Todo: Needs implementation
		throw new MethodNotAllowedException('Not implemented');
	}

	async verify(hash: string, data: string): Promise<boolean> {
		try {
			return await argon2.verify(hash, data);
		} catch (error) {
			return false;
		}
	}
}

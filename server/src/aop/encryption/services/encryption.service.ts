import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class EncryptionService {
	async hash(password: string) {
		try {
			return await argon2.hash(password);
		} catch (e) {
			return '';
		}
	}

	async verify(hash: string, data: string): Promise<boolean> {
		try {
			return await argon2.verify(hash, data);
		} catch (error) {
			return false;
		}
	}
}

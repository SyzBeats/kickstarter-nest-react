import { Module } from '@nestjs/common';
import { EncryptionService } from './services/encryption.service';

@Module({
	imports: [EncryptionService],
	exports: [EncryptionService],
})
export class EncryptionModule {}

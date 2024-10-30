import { Module } from '@nestjs/common';
import { RestApiModule } from './rest/rest-api.module';

@Module({
	imports: [RestApiModule],
	controllers: [],
	providers: [],
})
export class ApiModule {}

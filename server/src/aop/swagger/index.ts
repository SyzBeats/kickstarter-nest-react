import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const bootstrapSwagger = (app) => {
	const config = new DocumentBuilder()
		.setTitle('Budgeting API')
		.setDescription('The Budgeting API')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('swagger', app, document);
};

export default bootstrapSwagger;

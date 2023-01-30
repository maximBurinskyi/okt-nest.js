import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle('Nest module')
  .setDescription('The nest API description')
  .setVersion('1.0')
  .addTag('nest')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/doc', app, document);

  
  await app.listen(3000);
}
bootstrap();

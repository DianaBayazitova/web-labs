import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import hbs = require('hbs');
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { HttpExceptionFilter } from './http-exception.filter';
import supertokens from 'supertokens-node';
import { SupertokensExceptionFilter } from "./auth/auth.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  hbs.registerPartials(join(__dirname, '..', 'public/views/partials'));
  app.set('view engine', 'hbs');
  app.set('views', join(__dirname, '..', 'public/views'));

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('Cats example') // Todo change to unique
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('picture')
    .build();
  let document: OpenAPIObject;
  // eslint-disable-next-line prefer-const
  document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['https://webprogramminglabs.herokuapp.com'],
    // origin: ['localhost:3000'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

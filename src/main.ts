import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Get, Post, ValidationPipe } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Konfigurasi CORS
  // app.enableCors({
  //   origin: 'https://praysi-invitation.vercel.app',
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  //   credentials: true,
  // });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

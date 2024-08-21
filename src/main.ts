import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan CORS dengan konfigurasi default
  app.enableCors({
    origin: 'http://localhost:4200', // Mengizinkan akses hanya dari origin ini
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Mengizinkan pengiriman cookie dan header otentikasi
  });

  // Menggunakan ValidationPipe secara global
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();

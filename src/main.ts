import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Get, Post, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // Konfigurasi CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Ganti dengan origin frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Metode yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
    credentials: true, // Jika menggunakan cookies atau authorization headers
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

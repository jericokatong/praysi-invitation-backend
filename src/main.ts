import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Get, Post, ValidationPipe } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Konfigurasi CORS
  app.enableCors({
    origin: 'https://praysi-invitation.vercel.app', // Ganti dengan origin frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Metode yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
    credentials: true, // Jika menggunakan cookies atau authorization headers
  });
  app.useGlobalPipes(new ValidationPipe());
  app.getHttpAdapter().get('*', (req, res) => {
    if (req.method === 'OPTIONS') {
      res.send();
    }
  });
  await app.listen(3000);
}
bootstrap();

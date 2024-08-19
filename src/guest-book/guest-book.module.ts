import { Module } from '@nestjs/common';
import { GuestBookController } from './guest-book.controller';
import { GuestBookService } from './guest-book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestBookSchema } from './schemas/guest-book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'GuestBook', schema: GuestBookSchema }]),
  ],
  controllers: [GuestBookController],
  providers: [GuestBookService],
})
export class GuestBookModule {}

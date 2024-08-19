import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestBookService } from './guest-book.service';
import { GuestBook } from './schemas/guest-book.schema';
import { CreateGuestBookDto } from './dto/create-guest-book.dto';

@Controller('guest-books')
export class GuestBookController {
  constructor(private guestBookService: GuestBookService) {}

  @Get()
  async getAllGuestBooks(): Promise<GuestBook[]> {
    return this.guestBookService.findAll();
  }

  @Post()
  async createGuestBook(
    @Body()
    guestBook: CreateGuestBookDto,
  ): Promise<GuestBook> {
    return this.guestBookService.create(guestBook);
  }
}

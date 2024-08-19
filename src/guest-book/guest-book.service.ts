import { Injectable } from '@nestjs/common';
import { GuestBook } from './schemas/guest-book.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GuestBookService {
  constructor(
    @InjectModel(GuestBook.name)
    private guestBookModel: mongoose.Model<GuestBook>,
  ) {}

  async findAll(): Promise<GuestBook[]> {
    const guestBooks = await this.guestBookModel.find();
    return guestBooks;
  }

  async create(guestBook: GuestBook): Promise<GuestBook> {
    const res = await this.guestBookModel.create(guestBook);
    return res;
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class GuestBook {
  @Prop({ required: true, minlength: 1 })
  title: string;

  @Prop({ required: true, minlength: 1 })
  description: string;
}

export const GuestBookSchema = SchemaFactory.createForClass(GuestBook);

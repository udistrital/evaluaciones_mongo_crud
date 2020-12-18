import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'items'})
export class Item extends Document{

  @Prop({required: true})
  nombre: String          

  @Prop()
  descripcion: String

  @Prop(raw({}))
  estructura_item: Record<string, any>;

  @Prop()
  fecha_creacion: Date

  @Prop()
  fecha_modificacion: Date
};

export const ItemSchema = SchemaFactory.createForClass(Item);
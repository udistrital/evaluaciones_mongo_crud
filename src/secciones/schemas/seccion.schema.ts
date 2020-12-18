import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Item } from '../../items/schemas/item.schema';


@Schema({ collection: 'secciones' })
export class Seccion extends Document {

  @Prop({ required: true })
  nombre: String

  @Prop()
  descripcion: String

  @Prop(raw({}))
  estructura_seccion: Record<string, any>;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
  items_id: Item[];
  

  @Prop()
  fecha_creacion: Date

  @Prop()
  fecha_modificacion: Date
};

export const SeccionSchema = SchemaFactory.createForClass(Seccion);
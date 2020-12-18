import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Seccion } from '../../secciones/schemas/seccion.schema';

@Schema({ collection: 'tipos_evaluacion' })
export class TipoEvaluacion extends Document {

  @Prop({ required: true })
  nombre: String

  @Prop()
  descripcion: String

  @Prop(raw({}))
  estructura_tipo_evaluacion: Record<string, any>;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seccion' }] })
  secciones_id: Seccion[];

  @Prop()
  fecha_creacion: Date

  @Prop()
  fecha_modificacion: Date
};

export const TipoEvaluacionSchema = SchemaFactory.createForClass(TipoEvaluacion);

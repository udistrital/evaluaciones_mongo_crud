import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { TipoEvaluacion } from '../../tipos-evaluacion/schemas/tipo-evaluacion.schema';

@Schema({ collection: 'evaluaciones' })
export class Evaluacion extends Document {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TipoEvaluacion' })
  tipo_evaluacion_id: TipoEvaluacion;

  @Prop({ required: true })
  nombre: String;

  @Prop()
  descripcion: String;

  @Prop(raw({}))
  estructura_evaluacion: Record<string, any>;

  @Prop(raw({}))
  resultado: Record<string, any>;

  @Prop(raw({}))
  estado: Record<string, any>;

  @Prop({
    type: [raw({
      fecha_presentacion: Date,
      respuestas: [{
        item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
        respuesta: raw({})
      }]
    })
    ]
  })
  respuestas_por_fecha: Record<string, any>[];

  @Prop()
  fecha_creacion: Date;

  @Prop()
  fecha_modificacion: Date;
};

export const EvaluacionSchema = SchemaFactory.createForClass(Evaluacion);
import { ApiProperty } from '@nestjs/swagger';
import { TipoEvaluacion } from '../../tipos-evaluacion/schemas/tipo-evaluacion.schema';

export class EvaluacionDto {

  @ApiProperty({ type: String, default: "_id" })
  readonly tipo_evaluacion_id: TipoEvaluacion;

  @ApiProperty()
  readonly nombre: string;

  @ApiProperty()
  readonly descripcion: string;

  @ApiProperty({ type: Object, default: {} })
  readonly estructura_evaluacion: Record<string, any>;

  @ApiProperty({ type: Object, default: {} })
  readonly resultado: Record<string, any>;

  @ApiProperty({ type: Object, default: {} })
  readonly estado: Record<string, any>;

  @ApiProperty({
    type: Object, default: [{
      fecha_presentacion: new Date(),
      respuestas: [{
        item_id: "_id",
        respuesta: {}
      }]
    }]
  })
  readonly respuestas_por_fecha: Record<string, any>[];

  @ApiProperty()
  readonly fecha_creacion: Date;

  @ApiProperty()
  fecha_modificacion: Date;
}

import { ApiProperty} from '@nestjs/swagger';
import { Seccion } from '../../secciones/schemas/seccion.schema';


export class TipoEvaluacionDto{

  @ApiProperty()
  readonly nombre: string;

  @ApiProperty()
  readonly descripcion: string;

  @ApiProperty({ type: Object, default:{}})
  readonly estructura_tipo_evaluacion: Record<string, any>;

  @ApiProperty({type: String, isArray:true, default:["_id"]})
  readonly secciones_id: Seccion[];
  
  @ApiProperty()
  readonly fecha_creacion: Date;

  @ApiProperty()
  fecha_modificacion: Date;
}

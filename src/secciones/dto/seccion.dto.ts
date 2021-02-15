import { ApiProperty} from '@nestjs/swagger';
import { Item } from '../../items/schemas/item.schema';


export class SeccionDto{

  @ApiProperty()
  readonly nombre: string;

  @ApiProperty()
  readonly descripcion: string;

  @ApiProperty({ type: Object, default:{}})
  readonly estructura_seccion: Record<string, any>;

  @ApiProperty({type: String, isArray:true, default:["_id"]})
  readonly items_id: Item[];
  
  @ApiProperty()
  readonly fecha_creacion: Date;

  @ApiProperty()
  fecha_modificacion: Date;
}

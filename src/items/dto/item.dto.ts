import { ApiProperty} from '@nestjs/swagger';


export class ItemDto{
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  readonly descripcion: string;
  @ApiProperty({ type: Object, default:{}})
  readonly estructura_item: Record<string, any>;
  @ApiProperty()
  readonly fecha_creacion: Date;
  @ApiProperty()
  fecha_modificacion: Date;
}

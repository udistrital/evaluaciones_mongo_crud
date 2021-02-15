import { Module } from '@nestjs/common';
import { SeccionesService } from './secciones.service';
import { SeccionesController } from './secciones.controller';
import { Seccion, SeccionSchema } from './schemas/seccion.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Seccion.name, schema: SeccionSchema}])],    
  providers: [SeccionesService],
  controllers: [SeccionesController]
})
export class SeccionesModule {}

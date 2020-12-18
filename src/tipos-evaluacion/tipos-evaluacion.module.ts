import { Module } from '@nestjs/common';
import { TiposEvaluacionService } from './tipos-evaluacion.service';
import { TiposEvaluacionController } from './tipos-evaluacion.controller';
import { TipoEvaluacion, TipoEvaluacionSchema  } from './schemas/tipo-evaluacion.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name: TipoEvaluacion.name, schema: TipoEvaluacionSchema }])],    
  providers: [TiposEvaluacionService],
  controllers: [TiposEvaluacionController]
})
export class TiposEvaluacionModule {}

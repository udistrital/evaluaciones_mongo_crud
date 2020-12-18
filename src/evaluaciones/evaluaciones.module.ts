import { Module } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { EvaluacionesController } from './evaluaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Evaluacion, EvaluacionSchema} from './schemas/evaluacion.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Evaluacion.name, schema: EvaluacionSchema}])],
  providers: [EvaluacionesService],
  controllers: [EvaluacionesController]
})
export class EvaluacionesModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { SeccionesModule } from './secciones/secciones.module';
import { TiposEvaluacionModule } from './tipos-evaluacion/tipos-evaluacion.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/evaluciones_crud', { useFindAndModify: false }),ItemsModule, SeccionesModule, TiposEvaluacionModule, EvaluacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

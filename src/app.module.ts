import { Module } from '@nestjs/common';
import { environment } from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { SeccionesModule } from './secciones/secciones.module';
import { TiposEvaluacionModule } from './tipos-evaluacion/tipos-evaluacion.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';

@Module({
  /*imports: [MongooseModule.forRoot(`mongodb://${process.env.EVALUACIONES_MONGO_CRUD_USER}:${process.env.EVALUACIONES_MONGO_CRUD_PASS}@`+
  `${process.env.EVALUACIONES_MONGO_CRUD_HOST}:${process.env.EVALUACIONES_MONGO_CRUD_PORT}/`+
  `${process.env.EVALUACIONES_MONGO_CRUD_DB}?authSource=admin`, { useFindAndModify: false }),
    ItemsModule, SeccionesModule, TiposEvaluacionModule, EvaluacionesModule],*/
  imports: [MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
  `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, 
  { useFindAndModify: false }), ItemsModule, SeccionesModule, TiposEvaluacionModule, EvaluacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

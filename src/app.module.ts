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
  imports: [MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
  `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, 
  { useFindAndModify: false }), ItemsModule, SeccionesModule, TiposEvaluacionModule, EvaluacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Evaluacion } from './schemas/evaluacion.schema';
import { EvaluacionDto } from './dto/evaluacion.dto';


@Injectable()
export class EvaluacionesService {

  constructor(@InjectModel(Evaluacion.name) private readonly evaluacionModel: Model<Evaluacion>) { }

  async post(evaluacionDto: EvaluacionDto): Promise<Evaluacion> {        
    const evaluacion = new this.evaluacionModel(evaluacionDto);    
    evaluacion.fecha_creacion = new Date();    
    evaluacion.fecha_modificacion = new Date();    
    return evaluacion.save();
  } 
  
  async getAll(): Promise<Evaluacion[]> {
    return await this.evaluacionModel.find().populate({path: "respuestas_por_fecha", populate: {path: "respuestas", populate: {path: "item_id"}}}).populate("tipo_evaluacion_id").exec();//pendiente definir hasta donde se van a mostrar subdocumentos de determindada coleccion
  }

  async getById(id: string): Promise<Evaluacion> {
    try {
      return await this.evaluacionModel.findById(id).populate("tipo_evaluacion_id").exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, evaluacionDto: EvaluacionDto): Promise<Evaluacion> {
    try {            
      evaluacionDto.fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.evaluacionModel.findByIdAndUpdate(id, evaluacionDto, {new: true}).exec();      
      return await this.evaluacionModel.findById(id).exec();      
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.evaluacionModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }      

}

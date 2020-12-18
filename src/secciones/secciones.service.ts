import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Seccion } from './schemas/seccion.schema';
import { SeccionDto } from './dto/seccion.dto';




@Injectable() 
export class SeccionesService {

  constructor(@InjectModel(Seccion.name) private readonly seccionModel: Model<Seccion>) { }

  async post(seccionDto: SeccionDto): Promise<Seccion> {        
    const seccion = new this.seccionModel(seccionDto);    
    seccion.fecha_creacion = new Date();    
    seccion.fecha_modificacion = new Date();    
    return seccion.save();
  }

  async getAll(): Promise<Seccion[]> {
    return await this.seccionModel.find().populate("items_id").exec();//pendiente definir hasta donde se van a mostrar subdocumentos de determindada coleccion
  }

  async getById(id: string): Promise<Seccion> {
    try {
      return await this.seccionModel.findById(id).populate("items_id").exec();
    } catch (error) {
      return null;
    }
  }  

  async put(id: string, seccionDto: SeccionDto): Promise<Seccion> {
    try {            
      seccionDto.fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.seccionModel.findByIdAndUpdate(id, seccionDto, {new: true}).exec();      
      return await this.seccionModel.findById(id).exec();      
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.seccionModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }      


}

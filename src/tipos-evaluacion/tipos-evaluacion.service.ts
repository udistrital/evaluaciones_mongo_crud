import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TipoEvaluacion } from './schemas/tipo-evaluacion.schema';
import { TipoEvaluacionDto } from './dto/tipo-evaluacion.dto';
import { FilterDto } from '../filters/dto/filter.dto';
import { FiltersService } from '../filters/filters.service';


@Injectable()
export class TiposEvaluacionService {

  constructor(@InjectModel(TipoEvaluacion.name) private readonly tipoEvaluacionModel: Model<TipoEvaluacion>) { }

  async post(tipoEvaluacionDto: TipoEvaluacionDto): Promise<TipoEvaluacion> {
    const tipoEvaluacion = new this.tipoEvaluacionModel(tipoEvaluacionDto);
    tipoEvaluacion.fecha_creacion = new Date();
    tipoEvaluacion.fecha_modificacion = new Date();
    return tipoEvaluacion.save();
  }

  async getAll(filterDto: FilterDto): Promise<TipoEvaluacion[]> {
    const filtersService = new FiltersService(filterDto);
    if (filtersService.isPopulated()) {
      return await this.tipoEvaluacionModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
        .populate({ path: "secciones_id", populate: { path: "items_id" } })
        .sort(filtersService.getSortBy())
        .exec();
    } else {
      return await this.tipoEvaluacionModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
        .sort(filtersService.getSortBy())
        .exec();
    }
  }

  async getById(id: string, populate: string): Promise<TipoEvaluacion> {
    try {
      if (populate === 'true') {
        return await this.tipoEvaluacionModel.findById(id)
          .populate({
            path: "secciones_id",
            populate: {
              path: "items_id"
            }
          })
          .exec();        
      } else {
        return await this.tipoEvaluacionModel.findById(id).exec();
      }
      
    } catch (error) {
      return null;
    }
  }

  async put(id: string, tipoEvaluacionDto: TipoEvaluacionDto): Promise<TipoEvaluacion> {
    try {
      tipoEvaluacionDto.fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.tipoEvaluacionModel.findByIdAndUpdate(id, tipoEvaluacionDto, { new: true }).exec();
      return await this.tipoEvaluacionModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.tipoEvaluacionModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }


}

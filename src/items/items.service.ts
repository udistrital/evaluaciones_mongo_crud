import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';
import { ItemDto } from './dto/item.dto';


@Injectable()
export class ItemsService {

  constructor(@InjectModel(Item.name) private readonly itemModel: Model<Item>) { }

  async post(itemDto: ItemDto): Promise<Item> {        
    const item = new this.itemModel(itemDto);    
    item.fecha_creacion = new Date();    
    item.fecha_modificacion = new Date();    
    return item.save();
  }

  async getAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async getById(id: string): Promise<Item> {
    try {
      return await this.itemModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, itemDto: ItemDto): Promise<Item> {
    try {            
      itemDto.fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.itemModel.findByIdAndUpdate(id, itemDto, {new: true}).exec();      
      return await this.itemModel.findById(id).exec();      
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.itemModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }    

}

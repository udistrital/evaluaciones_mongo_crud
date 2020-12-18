import { Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ApiTags } from '@nestjs/swagger';
import { ItemDto } from './dto/item.dto';




@ApiTags('items')
@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) { }

  @Post()
  async post(@Res() res, @Body() itemDto: ItemDto) {
    const item = await this.itemsService.post(itemDto)
    return res.status(HttpStatus.OK).json({Data: item, Message: "Registration successfull", Status: "201", Success: true} );
  }

  @Get()
  async getAll(@Res() res) {
    const items = await this.itemsService.getAll();
    return res.status(HttpStatus.OK).json({Data: items, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const item = await this.itemsService.getById(id);
    if (!item) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({Data: item, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() itemDto: ItemDto) {
    const item = await this.itemsService.put(id, itemDto);
    if (!item) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: item, Message: "Update successfull", Status: "200", Success: true} );
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const item = await this.itemsService.delete(id);
    if (!item) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: {_id: id}, Message: "Delete successfull", Status: "200", Success: true} );//pendiente definir manejo de json para metodo delete
  }
}
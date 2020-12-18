import { Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { SeccionesService } from './secciones.service';
import { ApiTags } from '@nestjs/swagger';
import { SeccionDto } from './dto/seccion.dto';


@ApiTags('secciones')
@Controller('secciones')
export class SeccionesController {

  constructor(private readonly seccionesService: SeccionesService) { }

  @Post()
  async post(@Res() res, @Body() seccionDto: SeccionDto) {
    const seccion = await this.seccionesService.post(seccionDto);
    return res.status(HttpStatus.OK).json({Data: seccion, Message: "Registration successfull", Status: "201", Success: true} );
  } 
  
  @Get()
  async getAll(@Res() res) {
    const secciones = await this.seccionesService.getAll();
    return res.status(HttpStatus.OK).json({Data: secciones, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const seccion = await this.seccionesService.getById(id);
    if (!seccion) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({Data: seccion, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() seccionDto: SeccionDto) {
    const seccion = await this.seccionesService.put(id, seccionDto);
    if (!seccion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: seccion, Message: "Update successfull", Status: "200", Success: true} );
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const seccion = await this.seccionesService.delete(id);
    if (!seccion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: {_id: id}, Message: "Delete successfull", Status: "200", Success: true} );//pendiente definir manejo de json para metodo delete
  }


}

import { Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { TiposEvaluacionService } from './tipos-evaluacion.service';
import { ApiTags } from '@nestjs/swagger';
import { TipoEvaluacionDto } from './dto/tipo-evaluacion.dto';

@ApiTags('tipos_evaluacion')
@Controller('tipos-evaluacion')
export class TiposEvaluacionController {

  constructor(private readonly tiposEvaluacionService: TiposEvaluacionService) { }

  @Post()
  async post(@Res() res, @Body() tipoEvaluacionDto: TipoEvaluacionDto) {
    const tipoEvaluacion = await this.tiposEvaluacionService.post(tipoEvaluacionDto);
    return res.status(HttpStatus.OK).json({Data: tipoEvaluacion, Message: "Registration successfull", Status: "201", Success: true} );
  } 

  @Get()
  async getAll(@Res() res) {
    const tiposEvaluacion = await this.tiposEvaluacionService.getAll();
    return res.status(HttpStatus.OK).json({Data: tiposEvaluacion, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const tipoEvaluacion = await this.tiposEvaluacionService.getById(id);
    if (!tipoEvaluacion) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({Data: tipoEvaluacion, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() tipoEvaluacionDto: TipoEvaluacionDto) {
    const tipoEvaluacion = await this.tiposEvaluacionService.put(id, tipoEvaluacionDto);
    if (!tipoEvaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: tipoEvaluacion, Message: "Update successfull", Status: "200", Success: true} );
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const tipoEvaluacion = await this.tiposEvaluacionService.delete(id);
    if (!tipoEvaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: {_id: id}, Message: "Delete successfull", Status: "200", Success: true} );//pendiente definir manejo de json para metodo delete
  }

}

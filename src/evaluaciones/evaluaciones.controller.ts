import { Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { ApiTags } from '@nestjs/swagger';
import { EvaluacionDto } from './dto/evaluacion.dto';

@ApiTags('evaluaciones')
@Controller('evaluaciones')
export class EvaluacionesController {

  constructor(private readonly evaluacionesService: EvaluacionesService) { }

  @Post()
  async post(@Res() res, @Body() evaluacionDto: EvaluacionDto) {
    const evaluacion = await this.evaluacionesService.post(evaluacionDto);
    return res.status(HttpStatus.OK).json({Data: evaluacion, Message: "Registration successfull", Status: "201", Success: true} );
  } 

  @Get()
  async getAll(@Res() res) {
    const evaluaciones = await this.evaluacionesService.getAll();
    return res.status(HttpStatus.OK).json({Data: evaluaciones, Message: "Request successfull", Status: "200", Success: true} );
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const evaluacion = await this.evaluacionesService.getById(id);
    if (!evaluacion) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({Data: evaluacion, Message: "Request successfull", Status: "200", Success: true});
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() evaluacionDto: EvaluacionDto) {
    const evaluacion = await this.evaluacionesService.put(id, evaluacionDto);
    if (!evaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: evaluacion, Message: "Update successfull", Status: "200", Success: true} );
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const evaluacion = await this.evaluacionesService.delete(id);
    if (!evaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({Data: {_id: id}, Message: "Delete successfull", Status: "200", Success: true} );//pendiente definir manejo de json para metodo delete
  }


}

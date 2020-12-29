import { Query, Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { EvaluacionDto } from './dto/evaluacion.dto';
import { FilterDto } from '../filters/dto/filter.dto';
@ApiTags('evaluaciones')
@Controller('evaluaciones')
export class EvaluacionesController {

  constructor(private readonly evaluacionesService: EvaluacionesService) { }

  @Post()
  async post(@Res() res, @Body() evaluacionDto: EvaluacionDto) {
    const evaluacion = await this.evaluacionesService.post(evaluacionDto);
    return res.status(HttpStatus.OK).json({
      Data: evaluacion,
      Message: "Registration successfull",
      Status: "201",
      Success: true
    });
  } 
  @Get()
  async getAll(@Res() res,@Query() filterDto: FilterDto) {
    const evaluaciones = await this.evaluacionesService.getAll(filterDto);
    return res.status(HttpStatus.OK).json({
      Data: evaluaciones,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @ApiQuery({name: 'populate', description: 'populate - show subqueries. Must be a boolean', required: false})
  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string, @Query('populate') populate: string) {
    const evaluacion = await this.evaluacionesService.getById(id, populate);
    if (!evaluacion) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({
      Data: evaluacion,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() evaluacionDto: EvaluacionDto) {
    const evaluacion = await this.evaluacionesService.put(id, evaluacionDto);
    if (!evaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: evaluacion,
      Message: "Update successfull",
      Status: "200",
      Success: true
    });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const evaluacion = await this.evaluacionesService.delete(id);
    if (!evaluacion) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: {
        _id: id
      },
      Message: "Delete successfull",
      Status: "200",
      Success: true
    });//pendiente definir manejo de json para metodo delete
  }


}

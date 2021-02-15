import { Test, TestingModule } from '@nestjs/testing';
import { TiposEvaluacionController } from './tipos-evaluacion.controller';

describe('TiposEvaluacionController', () => {
  let controller: TiposEvaluacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposEvaluacionController],
    }).compile();

    controller = module.get<TiposEvaluacionController>(TiposEvaluacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

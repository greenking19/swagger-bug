import { Controller, Get } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiPaginatedResponse } from './decorators/apiPaginatedResponse';
import { CatDto } from './dto/cat.dto';
import { PaginatedDto } from './dto/paginated.dto';

@Controller()
@ApiTags('app')
@ApiExtraModels(PaginatedDto, CatDto)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiPaginatedResponse(CatDto)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/all')
  @ApiPaginatedResponse(CatDto)
  getAll(): string {
    return 'get all';
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiPaginatedResponse } from './decorators/apiPaginatedResponse';
import { CatDto } from './dto/cat.dto';
import { PaginatedDto } from './dto/paginated.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  @ApiPaginatedResponse(CatDto)
  async findAll(): Promise<PaginatedDto<CatDto>> {
    return {
      total: 1,
      limit: 1,
      offset: 1,
      results: [{ age: 1, name: 'momo', breed: 'any' }],
    };
  }
}

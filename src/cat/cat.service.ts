import { Injectable } from '@nestjs/common';
import { CatDto } from 'src/dto/cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<CatDto> {
    return {
      name: '1',
      age: 8,
      breed: 'something',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}

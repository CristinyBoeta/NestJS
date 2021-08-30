import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    async getAll(): Promise<Categoria[]> {
        return await this.categoriaService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.categoriaService.get(id);
        if (!result) {
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() categoriaData: Categoria): Promise<any> {
        return await this.categoriaService.create(categoriaData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() categoriaData: Categoria): Promise<any> {
        categoriaData.categoriaId = Number(id);
        console.log('Update #' + categoriaData.categoriaId)
        return await this.categoriaService.update(categoriaData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.categoriaService.delete(id);
    }  
}
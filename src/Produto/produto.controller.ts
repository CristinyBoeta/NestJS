import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    async getAll(): Promise<Produto[]> {
        return await this.produtoService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.produtoService.get(id);
        if (!result) {
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() ProdutoData: Produto): Promise<any> {
        return await this.produtoService.create(ProdutoData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() produtoData: Produto): Promise<any> {
        produtoData.produtoId = Number(id);
        console.log('Update #' + produtoData.produtoId)
        return await this.produtoService.update(produtoData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.produtoService.delete(id);
    }  
}
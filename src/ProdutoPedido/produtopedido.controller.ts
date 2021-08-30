import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { produtopedidoService } from './produtopedido.service';
import { ProdutoPedido } from './produtopedido.entity';

@Controller('produtopedidos')
export class produtopedidoController {
  constructor(private readonly produtopedidoService: produtopedidoService) {}

    @Get()
    async getAll(): Promise<ProdutoPedido[]> {
        return await this.produtopedidoService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.produtopedidoService.get(id);
        if (!result) {
            throw new HttpException('produtopedido não encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() produtopedidoData: ProdutoPedido): Promise<any> {
        return await this.produtopedidoService.create(produtopedidoData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() produtopedidoData: ProdutoPedido): Promise<any> {
        produtopedidoData.produtoPedidoId = Number(id);
        console.log('Update #' + produtopedidoData.produtoPedidoId)
        return await this.produtopedidoService.update(produtopedidoData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.produtopedidoService.delete(id);
    }  
}
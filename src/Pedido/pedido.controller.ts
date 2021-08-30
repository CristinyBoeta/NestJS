import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

    @Get()
    async getAll(): Promise<Pedido[]> {
        return await this.pedidoService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.pedidoService.get(id);
        if (!result) {
            throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() pedidoData: Pedido): Promise<any> {
        return await this.pedidoService.create(pedidoData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() pedidoData: Pedido): Promise<any> {
        pedidoData.pedidoId = Number(id);
        console.log('Update #' + pedidoData.pedidoId)
        return await this.pedidoService.update(pedidoData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.pedidoService.delete(id);
    }  
}
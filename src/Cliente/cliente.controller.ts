import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAll(): Promise<Cliente[]> {
        return await this.clienteService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.clienteService.get(id);
        if (!result) {
            throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() clienteData: Cliente): Promise<any> {
        return await this.clienteService.create(clienteData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() clienteData: Cliente): Promise<any> {
        clienteData.clienteId = Number(id);
        console.log('Update #' + clienteData.clienteId)
        return await this.clienteService.update(clienteData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.clienteService.delete(id);
    }  
}
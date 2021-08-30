import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { Endereco } from './endereco.entity';

@Controller('enderecos')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

    @Get()
    async getAll(): Promise<Endereco[]> {
        return await this.enderecoService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<any> {
        const result = await this.enderecoService.get(id);
        if (!result) {
            throw new HttpException('Endereco não encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    @Post()
    async create(@Body() enderecoData: Endereco): Promise<any> {
        return await this.enderecoService.create(enderecoData);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() enderecoData: Endereco): Promise<any> {
        enderecoData.enderecoId = Number(id);
        console.log('Update #' + enderecoData.enderecoId)
        return await this.enderecoService.update(enderecoData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.enderecoService.delete(id);
    }  
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProdutoPedido } from './produtopedido.entity';

@Injectable()
export class produtopedidoService {
  constructor(
    @InjectRepository(ProdutoPedido)
    private readonly produtopedidoRepository: Repository<ProdutoPedido>,
  ) {}

  async getAll(): Promise<ProdutoPedido[]> {
    return this.produtopedidoRepository.find();
  }

  async get(id: number): Promise<ProdutoPedido> {
    return this.produtopedidoRepository.findOne(id);
  }

  async create(produtopedido: ProdutoPedido): Promise<ProdutoPedido> {
    return await this.produtopedidoRepository.save(produtopedido);
  }

  async update(produtopedido: ProdutoPedido): Promise<UpdateResult> {
    return await this.produtopedidoRepository.update(produtopedido.produtoPedidoId, produtopedido);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.produtopedidoRepository.delete(id);
  }

}
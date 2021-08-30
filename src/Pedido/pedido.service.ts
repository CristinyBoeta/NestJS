import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async getAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async get(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOne(id);
  }

  async create(Pedido: Pedido): Promise<Pedido> {
    return await this.pedidoRepository.save(Pedido);
  }

  async update(Pedido: Pedido): Promise<UpdateResult> {
    return await this.pedidoRepository.update(Pedido.pedidoId, Pedido);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.pedidoRepository.delete(id);
  }

}
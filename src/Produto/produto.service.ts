import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async getAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async get(id: number): Promise<Produto> {
    return this.produtoRepository.findOne(id);
  }

  async create(Produto: Produto): Promise<Produto> {
    return await this.produtoRepository.save(Produto);
  }

  async update(Produto: Produto): Promise<UpdateResult> {
    return await this.produtoRepository.update(Produto.produtoId, Produto);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.produtoRepository.delete(id);
  }

}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async getAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async get(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne(id);
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<UpdateResult> {
    return await this.categoriaRepository.update(categoria.categoriaId, categoria);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.categoriaRepository.delete(id);
  }

}
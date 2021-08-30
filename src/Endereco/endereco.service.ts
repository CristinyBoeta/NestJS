import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Endereco } from './endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async getAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async get(id: number): Promise<Endereco> {
    return this.enderecoRepository.findOne(id);
  }

  async create(Endereco: Endereco): Promise<Endereco> {
    return await this.enderecoRepository.save(Endereco);
  }

  async update(Endereco: Endereco): Promise<UpdateResult> {
    return await this.enderecoRepository.update(Endereco.enderecoId, Endereco);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.enderecoRepository.delete(id);
  }

}
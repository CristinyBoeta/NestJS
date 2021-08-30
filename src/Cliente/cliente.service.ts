import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async getAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async get(id: number): Promise<Cliente> {
    return this.clienteRepository.findOne(id);
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<UpdateResult> {
    return await this.clienteRepository.update(cliente.clienteId, cliente);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.clienteRepository.delete(id);
  }

}
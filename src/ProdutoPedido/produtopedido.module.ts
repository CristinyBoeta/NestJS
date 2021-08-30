import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { produtopedidoController } from './produtopedido.controller';
import { ProdutoPedido } from './produtopedido.entity';
import { produtopedidoService } from './produtopedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoPedido])],
  providers: [produtopedidoService],
  controllers: [produtopedidoController],
})
export class ProdutoPedidoModule {}
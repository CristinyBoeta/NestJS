import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './Categoria/categoria.module';
import { ClienteModule } from './Cliente/cliente.module';
import { EnderecoModule } from './Endereco/endereco.module';
import { pedidoModule } from './Pedido/pedido.module';
import { ProdutoModule } from './Produto/produto.module';
import { ProdutoPedidoModule } from './ProdutoPedido/produtopedido.module';

@Module({
  imports: [CategoriaModule, ClienteModule, EnderecoModule, ProdutoModule, pedidoModule,ProdutoPedidoModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "25401343",
      database: "crud",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

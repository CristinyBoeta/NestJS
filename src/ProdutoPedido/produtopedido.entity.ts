import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Pedido } from "../Pedido/pedido.entity";
  import { Produto } from "../Produto/produto.entity";
  
  
  @Index("produto_pedido",["produtoPedidoId"], { unique: true })
  @Entity("produto_pedido", { schema: "public" })
  export class ProdutoPedido {

    @PrimaryGeneratedColumn({ type: "integer", name: "produto_pedido_id" })
    produtoPedidoId: number;
  
    @Column("integer", { name: "qtd_produto_pedido", nullable: true })
    qtdProdutoPedido: number | null;
  
    @Column("numeric", { name: "preco_produto_pedido", nullable: true })
    precoProdutoPedido: string | null;
  
    @ManyToOne(() => Pedido, (pedido) => pedido.produtoPedidos)
    @JoinColumn([{ name: "pedido_id", referencedColumnName: "pedidoId" }])
    pedido: Pedido;
  
    @ManyToOne(() => Produto, (produto) => produto.produtoPedidos)

    @ManyToOne(type => Produto, produto => produto.produtoPedidos)
    @JoinColumn([{ name: "produto_id", referencedColumnName: "produtoId" }])
    produto: Produto;
  }
  
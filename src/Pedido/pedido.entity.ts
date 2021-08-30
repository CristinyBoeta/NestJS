import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Cliente } from "../Cliente/cliente.entity";
  import { ProdutoPedido } from "../ProdutoPedido/produtopedido.entity";
  
  @Index("pedido_pkey",["pedidoId"], { unique: true })
  @Entity("pedido", { schema: "public" })
  export class Pedido {

    @PrimaryGeneratedColumn({ type: "integer", name: "pedido_id" })
    pedidoId: number;
  
 
    @Column("integer", { name: "numero_pedido", nullable: true })
    numeroPedido: number | null;
  

    @Column("numeric", { name: "valor_total_pedido", nullable: true })
    valorTotalPedido: string | null;
  

    @Column("date", { name: "data_pedido", default: () => "now()" })
    dataPedido: string;
  

    @Column("boolean", { name: "status", nullable: true })
    status: boolean | null;

    @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
    @JoinColumn([{ name: "cliente_id", referencedColumnName: "clienteId" }])
    cliente: Cliente;
 
    @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.pedido)
    produtoPedidos: ProdutoPedido[];
 
  }
  
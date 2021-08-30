import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Categoria } from "../Categoria/categoria.entity";
  import { ProdutoPedido } from "../ProdutoPedido/produtopedido.entity";
  
  @Index("produto_pkey",["produtoId"], { unique: true })
  @Entity("produto", { schema: "public" })
  export class Produto {
    @PrimaryGeneratedColumn({ type: "integer", name: "produto_id" })
    produtoId: number;
  
    @Column("character varying", {
      name: "nome_produto",
      nullable: true,
      length: 50,
    })
    nomeProduto: string | null;
  
    @Column("character varying", {
      name: "descricao_produto",
      nullable: true,
      length: 200,
    })
    descricaoProduto: string | null;
  
    @Column("numeric", { name: "preco_produto", nullable: true })
    precoProduto: string | null;
  
    @Column("integer", { name: "qtd_estoque", nullable: true })
    qtdEstoque: number | null;
  
    @Column("date", {
      name: "data_cadastro_produto",
      nullable: true,
      default: () => "now()",
    })
    dataCadastroProduto: string | null;
  
    @Column("character varying", { name: "imagem", nullable: true })
    imagem: string | null;
  
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    @JoinColumn([{ name: "categoria_id", referencedColumnName: "categoriaId" }])
    categoria: Categoria;
  
    @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.produto)
    @OneToMany(type => ProdutoPedido, produtoPedido => produtoPedido.produto)
    produtoPedidos: ProdutoPedido[];
  }
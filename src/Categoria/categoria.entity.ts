import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm';
import { Produto } from 'src/Produto/produto.entity';

@Index("pedido_pkey",["categoriaId"], { unique: true })
@Entity("categoria", { schema: "public" })
export class Categoria {
    @PrimaryGeneratedColumn({ type: "integer", name: "categoria_id" })
    categoriaId: number;

    @Column('character varying', {
      name: "nome_categoria",
      nullable: true,
      length: 20,
    })
    nomeCategoria: string | null;

    @Column("character varying", {
        name: "descricao_categoria",
        nullable: true,
        length: 200,
      })
      descricaoCategoria: string | null;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];
}
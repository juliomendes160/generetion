import { IsNotEmpty } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Postagem } from "../postagem/postagem"

@Entity({ name: "tb_tema" })
export class Tema {
	@PrimaryGeneratedColumn()
	id: number

	@IsNotEmpty()
	@Column({ length: 255, nullable: false })
	descricao: string

	@UpdateDateColumn()
	data: Date;
}

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Usuario } from "./usuario";

@Injectable()
export class UsuarioService {
	constructor(
		@InjectRepository(Usuario)
		private usuarioRepository: Repository<Usuario>
	) { }

	async findAll(): Promise<Usuario[]> {
		return await this.usuarioRepository.find();

	}

	async findOneById(id: number): Promise<Usuario> {
		const usuarioResult = await this.usuarioRepository.findOne({
			where: {
				id
			}
		});

		if (!usuarioResult) {
			throw new HttpException("Usuário: não encontrado!", HttpStatus.NOT_FOUND);
		}

		return usuarioResult;
	}

	async findOneByUsuario(usuario: Usuario): Promise<Usuario> {
		return await this.usuarioRepository.findOne({ 
			where: { 
				...usuario
			} 
		});
	}

	async create(usuario: Usuario): Promise<Usuario> {
		const resultUsuario = await this.findOneByUsuario(usuario);

		if (resultUsuario) {
			throw new HttpException("Usuário: requisição inválida", HttpStatus.BAD_REQUEST);
		}

		return await this.usuarioRepository.save(usuario);
	}

	async update(usuario: Usuario): Promise<Usuario> {
		await this.findOneById(usuario.id);

		const usuarioResult = await this.findOneById(usuario.id);

		if (usuarioResult && usuarioResult.id !== usuario.id) {
			throw new HttpException('Usuário: requisição inválida!', HttpStatus.BAD_REQUEST);
		}

		return await this.usuarioRepository.save(usuario);
	}

	async delete(id: number): Promise<DeleteResult> {
		await this.findOneById(id);

		return await this.usuarioRepository.delete(id);
	}
}

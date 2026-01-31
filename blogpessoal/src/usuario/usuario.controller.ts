import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";

@Controller("/usuario")
export class UsuarioController {
	constructor(private readonly usuarioService: UsuarioService) { }

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<Usuario[]> {
		return this.usuarioService.findAll();
	}

	@Get('/id/:id')
	@HttpCode(HttpStatus.OK)
	findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
		return this.usuarioService.findOneById(id)
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() usuario: Usuario): Promise<Usuario> {
		return this.usuarioService.create(usuario)
	}

	@Put()
	@HttpCode(HttpStatus.OK)
	async update(@Body() usuario: Usuario): Promise<Usuario> {
		return this.usuarioService.update(usuario)
	}

	@Delete('/id/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.usuarioService.delete(id);
	}
}

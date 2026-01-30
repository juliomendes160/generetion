import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Postagem } from './postagem';
import { PostagemService } from './postagem.service';

@Controller('postagem')
export class PostagemController {
	constructor(private readonly postagemService: PostagemService) { }
	
	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<Postagem[]> {
		return this.postagemService.findAll();
	}

	@Get('/id/:id')
	@HttpCode(HttpStatus.OK)
	findOneById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
		return this.postagemService.findOneById(id);
	}

	@Get('/titulo/:titulo')
	@HttpCode(HttpStatus.OK)
	findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
		return this.postagemService.findAllByTitulo(titulo);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(@Body() postagem: Postagem): Promise<Postagem> {
		return this.postagemService.create(postagem);
	}

	@Put()
	@HttpCode(HttpStatus.OK)
	update(@Body() postagem: Postagem): Promise<Postagem> {
		return this.postagemService.update(postagem);
	}

	@Delete('/id/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.postagemService.delete(id);
	}
}

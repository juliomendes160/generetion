import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Tema } from './tema';
import { TemaService } from './tema.service';

@Controller("/tema")
export class TemaController {
	constructor(private readonly temaService: TemaService) { }

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<Tema[]> {
		return this.temaService.findAll();
	}

	@Get('/id/:id')
	@HttpCode(HttpStatus.OK)
	findOneById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
		return this.temaService.findOneById(id);
	}

	@Get('/descricao/:descricao')
	@HttpCode(HttpStatus.OK)
	findAllBydescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
		return this.temaService.findAllByDescricao(descricao);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(@Body() tema: Tema): Promise<Tema> {
		return this.temaService.create(tema);
	}

	@Put()
	@HttpCode(HttpStatus.OK)
	update(@Body() tema: Tema): Promise<Tema> {
		return this.temaService.update(tema);
	}

	@Delete('/id/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.temaService.delete(id);
	}
}

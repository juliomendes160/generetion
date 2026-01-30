import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from '../tema/tema.module';
import { Postagem } from './postagem';
import { PostagemController } from './postagem.controller';
import { PostagemService } from './postagem.service';

@Module({
	imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
	providers: [PostagemService],
	controllers: [PostagemController]
})
export class PostagemModule { }

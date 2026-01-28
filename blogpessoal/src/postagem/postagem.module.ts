import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem';
import { PostagemController } from './postagem.controller';
import { PostagemService } from './postagem.service';

@Module({
	imports: [TypeOrmModule.forFeature([Postagem])],
	controllers: [PostagemController],
    providers: [PostagemService],
	exports: []
})
export class PostagemModule { }

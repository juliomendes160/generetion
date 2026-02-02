import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from '../postagem/postagem.module';
import { Tema } from './tema';
import { TemaController } from './tema.controller';
import { TemaService } from './tema.service';

@Module({
	imports: [TypeOrmModule.forFeature([Tema])],
	providers: [TemaService],
	controllers: [TemaController],
	exports: [TemaService]
})
export class TemaModule { }

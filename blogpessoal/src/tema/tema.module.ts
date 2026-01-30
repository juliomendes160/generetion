import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema';
import { TemaController } from './tema.controller';
import { TemaService } from './tema.service';

@Module({
	imports: [TypeOrmModule.forFeature([Tema])],
	providers: [TemaService],
	controllers: [TemaController]
})
export class TemaModule { }

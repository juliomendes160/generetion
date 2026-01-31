import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
	imports: [TypeOrmModule.forFeature([Usuario])],
	controllers: [UsuarioController],
    providers: [UsuarioService],
	exports: []
})
export class UsuarioModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Usuario } from './usuario/usuario';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "root",
			password: "root",
			database: "db_blogpessoal",
			entities: [Usuario],
			synchronize: true,
			logging: true,
		}),
		UsuarioModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

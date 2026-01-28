import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/postagem';
import { PostagemModule } from './postagem/postagem.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: process.env.DB_HOST ?? "localhost",
			port: Number(process.env.DB_PORT ?? 3306),
			username: process.env.DB_USERNAME ?? "root",
			password: process.env.DB_PASSWORD ?? "root",
			database: process.env.DB_NAME ?? "db_blogpessoal",
			entities: [Postagem],
			synchronize: true,
			logging: true
		}),
		PostagemModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule { }

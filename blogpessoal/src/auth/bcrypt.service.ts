import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
	private readonly saltOrRounds = 10;

	async hash(data: string): Promise<string> {
		return bcrypt.hash(data, this.saltOrRounds);
	}

	async compare(data: string, encrypted: string): Promise<boolean> {
		return bcrypt.compare(data, encrypted);
	}
}
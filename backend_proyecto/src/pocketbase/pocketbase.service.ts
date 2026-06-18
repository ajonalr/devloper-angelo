import { Injectable } from '@nestjs/common';
import PocketBase from 'pocketbase';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PocketbaseService {
  public pb: PocketBase;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('POCKETBASE_URL');
    this.pb = new PocketBase(url);

  this.init();
  }

  async init() {
  const email = this.configService.get<string>('POCKETBASE_ADMIN_EMAIL') || '';
  const password = this.configService.get<string>('POCKETBASE_ADMIN_PASSWORD') || '';
  
    try {
      await this.pb.admins.authWithPassword(email, password);
      console.log('Conectado a PocketBase como administrador');
    } catch (error) {
      console.error('Error al conectar a PocketBase:', error);
    }
  }

  testConnection() {
    return 'Conexión a PocketBase';
  }
}

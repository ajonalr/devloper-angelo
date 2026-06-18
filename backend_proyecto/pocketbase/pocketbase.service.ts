import { Injectable } from '@nestjs/common';
import PocketBase from 'pocketbase';

@Injectable()
export class PocketbaseService {
  // TODO: Pasar a variables de entotno (.env)
  public pb = new PocketBase('http://localhost:8090');

  constructor() {
    this.init();
  }

  async init() {
    try {
      await this.pb.admins.authWithPassword(
        'angelorl305@gmail.com',
        'MiClave1234',
      );

      console.log('PocketBase admin autenticado');
    } catch (err) {
      console.log('Error autenticando admin:', err);
    }
  }

  testConnection() {
    return 'conectado a pocketbase';
  }
}
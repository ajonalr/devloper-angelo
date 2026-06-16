import { Injectable } from '@nestjs/common';
import pocketbase from 'pocketbase';

@Injectable()
export class PocketbaseService {
    private pb = new pocketbase('http://localhost:8090');
    

    testConnection(){
        return 'conectado a pocketbase';
    }
}

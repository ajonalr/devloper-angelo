import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {


  constructor(private configService: ConfigService) {}

 

  getHello(): string {
    return this.configService.getOrThrow<string>('APP_NAME');
  }


  getProfile() {

    return  {
      'name': 'Ariel Ramirez',
      'eage': 26,
      'address' : 'ciudad'
    }

  }


}
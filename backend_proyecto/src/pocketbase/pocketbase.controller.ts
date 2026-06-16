import { Controller, Get } from '@nestjs/common';
import { PocketbaseService } from './pocketbase.service';

@Controller('pocketbase')
export class PocketbaseController {
    constructor(private readonly pocketbaseService: PocketbaseService) {}
    @Get()
   test() {
    return this.pocketbaseService.testConnection();
}
}
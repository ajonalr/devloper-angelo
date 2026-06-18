import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PocketbaseService } from '../../pocketbase/pocketbase.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PocketbaseService],
})
export class ProductsModule {}
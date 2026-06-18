import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PocketbaseService } from '../../pocketbase/pocketbase.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly pocketbaseService: PocketbaseService,
  ) {}

  create(createProductDto: CreateProductDto) {
  console.log('📦 DTO:', createProductDto);

  return this.pocketbaseService.pb
    .collection('products')
    .create(createProductDto)
    .then((res) => {
      console.log('✅ OK PocketBase:', res);
      return res;
    })
    .catch((err) => {
      console.log('🔥 ERROR REAL POCKETBASE:');
      console.log(err?.response || err);
      throw err;
    });
}
  findAll() {
    return this.pocketbaseService.pb
      .collection('products')
      .getFullList();
  }

  findOne(id: string) {
    return this.pocketbaseService.pb
      .collection('products')
      .getOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.pocketbaseService.pb
      .collection('products')
      .update(id, updateProductDto);
  }

  remove(id: string) {
    return this.pocketbaseService.pb
      .collection('products')
      .delete(id);
  }
}
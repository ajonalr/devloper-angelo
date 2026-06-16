import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PocketbaseService } from './pocketbase/pocketbase.service';
import { PocketbaseController } from './pocketbase/pocketbase.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, PocketbaseController],
  providers: [AppService, PocketbaseService],
})
export class AppModule {}
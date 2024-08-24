import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FirebaseModule} from "nestjs-firebase";
import {AuthMiddleware} from "./auth/firebase-auth.middleware";
import { StorageModule } from './storage/storage.module';
import {IdgenService} from "./utils/idgen/idgen.service";
import {IdgenModule} from "./utils/idgen/idgen.module";
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { SearchModule } from './search/search.module';
import * as process from 'node:process';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    FirebaseModule.forRoot({
      googleApplicationCredential: "./configs/private-key.json" // Đường dẫn đến file firebase-admin-key.json
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),

      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: { rejectUnauthorized: false },

    }),
      AuthModule,
      StorageModule,
      IdgenModule,
      ProfileModule,
      PostModule,
      SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService, IdgenService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthMiddleware)
        .forRoutes('*'); // Áp dụng middleware cho tất cả các route, bạn có thể tùy chỉnh theo nhu cầu
  }
}

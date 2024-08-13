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

@Module({
  imports: [
    FirebaseModule.forRoot({
      googleApplicationCredential: "./configs/private-key.json" // Đường dẫn đến file firebase-admin-key.json
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cqnkjfo8fa8c73ar4g90-a.singapore-postgres.render.com',
      port: 5432,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      username: 'netogram',
      password: 'TSmayzBYZeRxTwtIlW7HhTFchn99h65H',
      database: 'public_3wnq',
      synchronize: true,
      ssl: { rejectUnauthorized: false },

    }),
      AuthModule,
      StorageModule,
      IdgenModule,
      ProfileModule,
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

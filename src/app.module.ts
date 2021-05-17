import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { LiveModule } from './live/live.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://jakevin:jakevin@47.94.222.34:27017/test1', { autoIndex: false }),
    UsersModule,
    LiveModule,
    AuthModule
  ],
  controllers: [AppController],
})
export class AppModule { }

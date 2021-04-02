import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://jakevin:jakevin@47.94.222.34:27017/test1', { autoIndex: false }), UsersModule],
  // controllers: [UsersController],
  // providers: [UsersService],
})
export class AppModule {}

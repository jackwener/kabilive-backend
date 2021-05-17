import { Module } from '@nestjs/common';
import { LiveService } from './live.service';
import { LiveController } from './live.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Live, LiveSchema } from './entities/live.entity';

@Module({
  controllers: [LiveController],
  providers: [LiveService],
  exports: [LiveService],
  imports: [
    MongooseModule.forFeature([{ name: Live.name, schema: LiveSchema }]),
  ]
})
export class LiveModule {}

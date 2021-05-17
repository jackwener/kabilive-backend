import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LiveService } from './live.service';
import { CreateLiveDto } from './dto/create-live.dto';
import { UpdateLiveDto } from './dto/update-live.dto';

@Controller('live')
export class LiveController {
  constructor(private readonly liveService: LiveService) {}

  @Get('sorts')
  findSortAll() {
    return this.liveService.findAllSort();
  }

  @Get(':sort')
  getSortLive(@Param('sort') sortName: String) {
    return this.liveService.findSortLive(sortName);
  }

  @Post()
  create(@Body() createLiveDto: CreateLiveDto) {
    return this.liveService.create(createLiveDto);
  }

  @Delete('/creator/:creator')
  removeByCreator(@Param('creator') creator: String) {
    return this.liveService.removeByCreator(creator);
  }

  @Get()
  findAll() {
    return this.liveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: String) {
    return this.liveService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: String, @Body() updateLiveDto: UpdateLiveDto) {
    return this.liveService.update(id, updateLiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: String) {
    return this.liveService.remove(id);
  }


}

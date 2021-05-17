import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateLiveDto } from './dto/create-live.dto';
import { UpdateLiveDto } from './dto/update-live.dto';
import { Live, LiveDocument } from './entities/live.entity';

@Injectable()
export class LiveService {
  constructor(
    @InjectModel(Live.name) private readonly model: Model<LiveDocument>,
  ) { }

  async create(createLiveDto: CreateLiveDto): Promise<Live> {
    return await new this.model({
      ...createLiveDto,
      _id: new Types.ObjectId(),
    }).save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOne(liveId: String) {
    return await this.model.findById(liveId).exec();
  }

  async update(liveId: String, updateLiveDto: UpdateLiveDto) {
    return await this.model.updateOne({ _id: liveId }, updateLiveDto).exec();
  }

  async removeByCreator(username: String) {
    return await this.model.deleteMany({ creator: username }).exec();
  }

  async remove(liveId: String) {
    return await this.model.deleteOne({ _id: liveId }).exec();
  }

  /* ************************* sort ************************* */
  findAllSort() {
    return [
      '英雄联盟',
      '穿越火线',
      '炉石传说',
      '魔兽世界',
      '守望先锋',
      '星际争霸',
      '格斗游戏',
      '主机游戏',
      '热门网游',
      '怀旧游戏'
    ];
  }

  async findSortLive(sortName: String) {
    return await this.model.find({ sort: sortName })
  }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await new this.model({
      ...createUserDto,
      _id: new Types.ObjectId(),
    }).save();
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(userId: String): Promise<User> {
    return await this.model.findById(userId).exec();
  }

  async findName(name: String): Promise<User> {
    return await this.model.findOne({"name": name}).exec();
  }

  async remove(userId: String) {
    return await this.model.deleteOne({ _id: userId });
  }

  async findOneByName(username: String): Promise<User> {
    return await this.model.findOne({ name: username }).exec();
  }

  update(userId: String, updateUserDto: UpdateUserDto) {
    return `This action updates a user`;
  }

  /*
  async follow(userId: String, followingId: String) {
    return await this.model.updateOne(
      { _id: userId },
      { $push: { followings: followingId } },
    );
  }

  async unfollow(userId: String, followingId: String) {
    return await this.model.updateOne(
      { _id: userId },
      { $pull: { followings: followingId } },
    );
  }
  */
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* **********************  用户  ********************** */

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userid')
  findOne(@Param('userid') id: String) {
    return this.usersService.findOne(id);
  }

  @Get('name/:name')
  findName(@Param('name') name: String) {
    return this.usersService.findName(name);
  }

  @Patch(':userid')
  update(@Param('userid') id: String, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':userid')
  remove(@Param('userid') id: String) {
    return this.usersService.remove(id);
  }

  /* **********************  关注  ********************** */

  /*
  @Get(':userid/followings')
  getFollowings(@Param('userid') id: String) {
    this.usersService.findOne(id).then((user) => {
      return user.followings;
    });
  }

  @Post(':userid/followings/:followingid')
  follow(
    @Param('userid') userid: String,
    @Param('followingid') followingId: String,
  ) {
    this.usersService.follow(userid, followingId);
  }

  @Delete(':userid/followings/:followingid')
  unfollow(
    @Param('userid') userid: String,
    @Param('followingid') followingId: String,
  ) {
    this.usersService.unfollow(userid, followingId);
  }
  */
}

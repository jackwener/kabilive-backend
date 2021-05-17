import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: String, pass: String): Promise<User> {
    const user = await this.usersService.findOneByName(username);
    console.log(user)
    console.log(username, pass)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.name, sub: user._id };
    return {
      "statusCode": 200,
      "message": this.jwtService.sign(payload),
    };
  }
}

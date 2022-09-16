import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserDto } from './user-dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(id: number): Promise<User> {
    if (!+id) throw new HttpException('User ID Provided is not a number', 400);
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException("User doesn't exist");
  }

  async createUser(CreateUserDto: UserDto): Promise<User> {
    const { email, password } = CreateUserDto;
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return user;
  }
}

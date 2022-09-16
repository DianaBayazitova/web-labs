import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { UserDto } from './user-dto';

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get All Users',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiOperation({
    summary: 'Get user by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.getUser(id);
  }

  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'User Created!',
  })
  @Post('create')
  async createUser(@Body() CreateUserDto: UserDto): Promise<User> {
    return await this.userService.createUser(CreateUserDto);
  }
}

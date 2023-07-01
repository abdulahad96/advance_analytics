import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, BadRequestException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from 'src/authz/jwt.strategy';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const user = plainToClass(CreateUserDto, createUserDto);

    const errors = await validate(user);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const createdUser = await this.userService.create(user);
      return createdUser;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle specific Prisma errors and return custom response
        if (err.code === 'P2002') {
          throw new BadRequestException('Email Already Registered');
        }
      }

      // Handle other errors or re-throw the original error
      throw err;
    }
  }
  @UseGuards(JwtStrategy)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

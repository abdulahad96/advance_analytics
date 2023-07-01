import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from '../../prisma/prisma.service'
import { User as UserModel, Prisma } from '@prisma/client'
import { IUser } from 'models/user';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, platform, phone, dob } = createUserDto
    return this.prismaService.user.create({
      data: { firstName, lastName, email, platform, phone, dob }
    })
 
  // return true
}

findAll() {
  return `This action returns all user`;
}

findOne(id: number) {
  return `This action returns a #${id} user`;
}

update(id: number, updateUserDto: UpdateUserDto) {
  return `This action updates a #${id} user`;
}

remove(id: number) {
  return `This action removes a #${id} user`;
}
}

// https://www.prisma.io/nestjs

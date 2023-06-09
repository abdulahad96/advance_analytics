import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from 'prisma/prisma.service';
// import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}

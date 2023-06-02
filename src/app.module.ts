import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TanentModule } from './tanent/tanent.module';

@Module({
  imports: [UserModule, TanentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UserService],
})
export class UsersModule {}

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}

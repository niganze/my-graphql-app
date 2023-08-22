import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }
  async updateUser(id: number, data: UpdateUserInput): Promise<User> {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne({ where: { id } });
  }
  async deleteUser(id: number): Promise<boolean> {
    const deleteResult = await this.userRepository.delete(id);
    return deleteResult.affected > 0;
  }
}

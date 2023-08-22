import { InputType, Field } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';

@InputType()
@Entity({ name: 'User' })
export class CreateUserInput {
  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;
}

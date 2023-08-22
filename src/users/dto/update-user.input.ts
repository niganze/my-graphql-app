import { InputType, Field } from '@nestjs/graphql';

import { Entity, Column } from 'typeorm';

@InputType()
@Entity({ name: 'User' })
export class UpdateUserInput {
  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  @Column()
  lastname?: string;

  @Field({ nullable: true })
  @Column()
  email?: string;

  @Field({ nullable: true })
  @Column()
  password?: string;
}

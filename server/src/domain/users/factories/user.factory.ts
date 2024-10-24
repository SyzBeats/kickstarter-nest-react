import { User } from '../entities/user';
import { CreateUserInput } from '../inputs/create-user.input';

export class UserFactory {
  static create(
    { firstName, lastName, email, password }: CreateUserInput,
    _id: string | null = null,
  ): User {
    return new User(
      _id,
      new Date(),
      new Date(),
      firstName,
      lastName,
      email,
      password,
    );
  }
}

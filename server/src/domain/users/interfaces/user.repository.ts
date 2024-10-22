import { CreateUserDto } from 'src/api/users/dto/user.input-dto';
import { User } from '../user';
import { AppContext } from 'src/aop/http/context';

export interface IUserRepository {
  insert(input: CreateUserDto, context: AppContext): Promise<User>;
  getById(id: string, context: AppContext): Promise<User>;
}

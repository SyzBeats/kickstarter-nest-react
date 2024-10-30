import { CreateUserDto } from 'src/api/rest/users/dto/user.input-dto';
import { AppContext } from 'src/aop/http/context';
import { User } from '../entities/user';

export interface IUserRepository {
	insert(input: CreateUserDto, context: AppContext): Promise<User>;
	getById(id: string, context: AppContext): Promise<User>;
	getAll(context: AppContext): Promise<User[]>;
}

import { User } from '../user';

export interface IUserRepository {
  getById(userId: string): Promise<User>;
}

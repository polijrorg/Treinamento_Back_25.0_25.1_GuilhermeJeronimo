import { randomUUID } from 'crypto';

import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

class UserService {
  private repository: UserRepository;

  constructor() {

    this.repository = new UserRepository();
  }

  public create(name: string, email: string, number: string, senha: string): User {
    const id = randomUUID();

    const User = this.repository.create({
      id,
      name,
      email,
      number,
      senha,
    });

    return User;
  }

  public listAll(): User[] {
    return this.repository.getAll();
  }

  public findById(id: string): User | undefined {
    return this.repository.getById(id);
  }

  public update(id: string, name: string, email: string, number: string, senha: string): User | null {
    const existingUser = this.repository.getById(id);

    if (!existingUser) return null;

    return this.repository.update({
      id,
      data: {name, email, number, senha},
    });
  }

  public delete(id: string): boolean {
    const index = this.repository.findIndexById(id);

    if (index === -1) return false;

    this.repository.delete(index);
    return true;
  }
}

export default new UserService();
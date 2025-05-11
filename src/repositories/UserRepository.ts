import User from '../models/User';

interface ICreateUserDTO {
  id: string;
  name: string;
  email: string;
  number: string;
  senha: string;
}

interface IUpdateUserDTO {
  id: string;
  data: {
    name: string;
    email: string;
    number: string;
    senha: string;
  };
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  public create(data: ICreateUserDTO): User {
    const { id, name, email, number, senha } = data;

    const user = new User(id, name, email, number, senha);
    this.users.push(user); // salva no array

    return user;
  }

  public getAll(): User[] {
    return this.users;
  }

  public getById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  public findIndexById(id: string): number {
    return this.users.findIndex(user => user.id === id);
  }

  public update(data: IUpdateUserDTO): User {
    const index = this.findIndexById(data.id);

    this.users[index] = {
      ...this.users[index], 
      ...data.data, 
    };

    return this.users[index];
  }

  public delete(index: number): void {
    this.users.splice(index, 1); 
  }
}

export default UserRepository;

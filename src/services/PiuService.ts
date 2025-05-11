import { randomUUID } from 'crypto';

import Piu from '../models/Piu';
import PiuRepository from '../repositories/PiuRepository';

class PiuService {
  private repository: PiuRepository;

  constructor() {

    this.repository = new PiuRepository();
  }

  public create(userid: string, texto: string, likesNumber: number, commentsNumber: number): Piu {
    const id = randomUUID(); 
    const Piu = this.repository.create({
        id,
        userid,
        texto,
        likesNumber,
        commentsNumber,
    });

    return Piu;
  }

  public listAll(): Piu[] {
    return this.repository.getAll();
  }

  public findById(id: string): Piu | undefined {
    return this.repository.getById(id);
  }

  public delete(id: string): boolean {
    const index = this.repository.findIndexById(id);

    if (index === -1) return false;

    this.repository.delete(index);
    return true;
  }
}

export default new PiuService();
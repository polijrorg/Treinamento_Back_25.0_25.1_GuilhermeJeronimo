import Piu from '../models/Piu';

interface ICreatePiuDTO {
    id: string; 
    userid: string;
    texto: string;
    likesNumber: number;
    commentsNumber: number;
}

class PiuRepository {
  private pius: Piu[];

  constructor() {

    this.pius = [];
  }

  public create(data: ICreatePiuDTO): Piu {
    const { id, userid, texto, likesNumber, commentsNumber} = data;

    const piu = new Piu(id, userid, texto, likesNumber, commentsNumber);
    this.pius.push(piu); 

    return piu;
  }

  public getAll(): Piu[] {
    return this.pius;
  }

  public getById(id: string): Piu | undefined {
    return this.pius.find(piu => piu.id === id);
  }

  public findIndexById(id: string): number {
    return this.pius.findIndex(piu => piu.id === id);
  }
  
  public delete(index: number): void {
    this.pius.splice(index, 1); 
  }
}

export default PiuRepository;
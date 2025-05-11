class User {
    id: string; 
    name: string; 
    email: string;
    number: string;
    senha: string; 
  
    constructor(id: string, name: string, email: string, number: string, senha: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.number = number;
      this.senha = senha;
    }
  }
  
  export default User;
  
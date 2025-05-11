class Piu {
    id: string; 
    userid: string;
    texto: string;
    likesNumber: number;
    commentsNumber: number;
    publishDate: Date;
    lastUpdateDate: Date;
  
    constructor(id: string, userid: string, texto: string, likesnumber: number, commentsnumber: number) {
      this.id = id;
      this.userid = userid;
      this.texto = texto;
      this.likesNumber = likesnumber;
      this.commentsNumber = commentsnumber;
      this.publishDate = new Date();
      this.lastUpdateDate = new Date();
    }
  }
  
  export default Piu;
  
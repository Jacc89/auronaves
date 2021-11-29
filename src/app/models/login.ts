export class Login{
    id:number;
    correo:Date;
    password: number;
    
    constructor(
                  id:number,
                  correo:Date,
                  password: number){
  
      this.id = id,
      this.correo = correo,
      this.password = password
    }
  
  }
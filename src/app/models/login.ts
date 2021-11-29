export class Login{
    id:number;
    correo:string;
    password: string;
    
    constructor(
                  id:number,
                  correo:string,
                  password: string){
  
      this.id = id,
      this.correo = correo,
      this.password = password
    }
  
  }
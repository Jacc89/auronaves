export class Usuario{
    id:number;
    nombre:string;
    apellido: string;
    correo:string;
    dirreccion:string;
    password:string;
    telefono: number;
    
   
  
    constructor(
                  id:number,
                  nombre:string,
                  apellido: string,
                  correo:string,
                  dirreccion:string,
                  password:string,
                  telefono: number){
  
      this.id = id,
      this.nombre = nombre,
      this.apellido = apellido,
      this.correo = correo,
      this.dirreccion = dirreccion,
      this.password = password,
      this.telefono = telefono
    }
  
  }
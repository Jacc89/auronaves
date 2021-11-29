export class Alquiler{
    id:number;
    fecha_salida:Date;
    fecha_llegada: Date;
    pasajeros: number;
    
    constructor(
                  id:number,
                  fecha_salida:Date,
                  fecha_llegada: Date,
                  pasajeros: number){
  
      this.id = id,
      this.fecha_salida = fecha_salida,
      this.fecha_llegada = fecha_llegada,
      this.pasajeros = pasajeros
    }
  
  }
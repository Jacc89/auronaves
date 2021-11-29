import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {

  viaje = {
    destino: '',
    fecha_salida: '',
    fecha_llegada: '',
    pasajeros: ''

  }
  

  constructor() { }

  ngOnInit(): void {
  }

  alquiler(){
    console.log('estoy en el alquiler');
    console.log(this.viaje);
    
    
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/registro';
import { ApiService } from 'src/app/services/api.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // listaform: Usuario[] = [];

    form = {
    nombre : '',
    apellido : '',
    correo : '',
    dirreccion : '',
    password : '',
    telefono : ''
  }
    formIncorrecto= false;

    @Output() newRegistro = new EventEmitter<any>();

  constructor(){}
  ngOnInit(): void {
  }
 
  registro() {
    console.log(this.form);
    this.newRegistro.emit(this.form);
    this.resetForm(); 
  }
  resetForm(){

    const form={  
      nombre : '',
     apellido: '',
     correo: '',
     dirreccion: '',
     password: '',
     telefono: ''
  }
  }

}

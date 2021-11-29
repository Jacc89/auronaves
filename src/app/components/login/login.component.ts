import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
  correo : '',
  password : ''

  }

  constructor(private authService: AuthService){}

  login(): void {
    console.log(this.usuario);
        
    const {correo,password} = this.usuario

    this.authService.login(correo,password).then((res:any)=>{
      console.log('se registro',res);
    })
  }
  IngresarGoogle(): void {
    console.log(this.usuario);
        
    const {correo,password} = this.usuario;

    this.authService.loginWinGoogle(correo,password).then((res:any)=>{
      console.log('se registro',res);
    })
  }

  obtenerUserLog(){
    this.authService.getUserLogged().subscribe((res: any)=>{
      console.log(res?.correo);
      
    })
  }
  logout(){
    this.authService.logout();

  }













































  // isLogin: boolean = false
  // errorMessage: any

  // constructor(
  // private _api: ApiService,
  // // private _auth: AuthService,
  // private _router:Router
  // ) { }
  ngOnInit() {
  // this.isUserLogin();
  }
  onSubmit(form: NgForm) {
  console.log('Your form data : ', form.value);
  // this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
  // if (res.status) {
  // console.log(res)
  // this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
  // this._auth.setDataInLocalStorage('token', res.token);
  // this._router.navigate(['']);
  // } else {
  // }
  // }, err => {
  // this.errorMessage = err['error'].message;
  // });
  // }
  // isUserLogin(){
  // console.log(this._auth.getUserDetails())
  // if(this._auth.getUserDetails() != null){
  // this.isLogin = true;
  // }
  // }
  // logout(){
  // this._auth.clearStorage()
  // this._router.navigate(['']);
  }
  
}

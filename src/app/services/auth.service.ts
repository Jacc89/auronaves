import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private afauth: AngularFireAuth) { }

 async login(correo:string, password:string){
     try {
         return await this.afauth.signInWithEmailAndPassword(correo, password);
     } catch (error) {
         console.log(' el login esta incorrecto', error);
         return null;    
     }
 }
     async loginWinGoogle(correo:string, password:string){
      try {
          return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      } catch (error) {
          console.log(' el login esta incorrecto', error);
          return null;  
      }
    }

    async registro(correo:string, password:string){
      try {
          return await this.afauth.createUserWithEmailAndPassword(correo, password);
      } catch (error) {
          console.log(' el login esta incorrecto', error);
          return null;
      }
  }

  getUserLogged(){ 
      return this.afauth.authState;
  }

  logout(){
      this.afauth.signOut();
  }  

}

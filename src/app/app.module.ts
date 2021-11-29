import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// componentes
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListarComponent } from './components/listar/listar.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';




const firebaseConfig = {
  apiKey: "AIzaSyD3X-GB_Op2VRXyndSeekGx3r5FBfrz8BA",
  authDomain: "prueba-angular-7d7a4.firebaseapp.com",
  projectId: "prueba-angular-7d7a4",
  storageBucket: "prueba-angular-7d7a4.appspot.com",
  messagingSenderId: "390436100692",
  appId: "1:390436100692:web:be32a48bfbe25fc63cebc1",
  measurementId: "G-2PM57JCBNX"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListarComponent,
    AlquilerComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

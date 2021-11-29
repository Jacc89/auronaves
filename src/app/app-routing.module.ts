import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alquiler', component: AlquilerComponent },
  { path: '', redirectTo: 'alquiler', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
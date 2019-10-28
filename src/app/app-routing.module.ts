import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';


const routes: Routes = [
  // routeGuard is not needed as we r not saving anything in localstorage. we r using cookie
  // {path:'', component: HomeComponent, canActivate: [authGuard]},
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SigninComponent},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlaygroundComponent } from './playground/playground.component';
import { authGuard } from 'src/Shared/auth.guard';

const routes: Routes = [
  {path:'',component:PlaygroundComponent, canActivate:[authGuard]},
  {path:'login',component:LoginComponent,},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

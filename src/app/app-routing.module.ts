import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'',
  component:LoginComponent,
  title: "Welcome page"},
  {
    path:'dashbord',
  component:DashbordComponent,
  title: "Dashbord"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

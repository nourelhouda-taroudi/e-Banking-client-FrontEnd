import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from '../client-home/client-home.component';
import { AuthentificationComponent } from './authentification.component';


const routes: Routes = [
  { path: '', component: AuthentificationComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }

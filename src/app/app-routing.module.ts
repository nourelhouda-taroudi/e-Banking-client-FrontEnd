import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent } from './client-home/client-home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CreanciersComponent } from './creanciers/creanciers.component';
import { PaymentComponent } from './payment/payment.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes= [
  { path: 'Authentification', component: AuthentificationComponent},
  { path: '', component: ClientHomeComponent},
  { path: 'Menu', component: MenuComponent},
  { path: 'Profile', component: ProfileComponent},
  {path: 'updatePassword' ,   component: ForgotPasswordComponent},


{ 
  path: 'historique' ,   component: HistoriqueComponent
},
{ 
  path: 'creanciers' ,   component: CreanciersComponent
},
{ 
  path: 'virment' ,   component: PaymentComponent
},
{ 
  path: 'validation/:id' ,   component: ValidationComponent
},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
export const routingComponents = [
  AuthentificationComponent,
   ClientHomeComponent,
   MenuComponent,
   ProfileComponent,
   HistoriqueComponent,
   PaymentComponent,
   CreanciersComponent,
  ValidationComponent
  ];


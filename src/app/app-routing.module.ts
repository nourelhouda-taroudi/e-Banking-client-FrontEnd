import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent } from './client-home/client-home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';

import { HistoriqueComponent } from './historique/historique.component';
import { CreanciersComponent } from './creanciers/creanciers.component';
import { PaymentComponent } from './payment/payment.component';
import { ValidationComponent } from './validation/validation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TransferComponent } from './transfer/transfer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes= [
  { path: 'Authentification', component: AuthentificationComponent},
  { path: '', component: ClientHomeComponent},
  { path: 'Menu', component: MenuComponent},
  { path: 'Profile', component: ProfileComponent},
  {path: 'updatePassword' ,   component: ChangePasswordComponent},


{ 
  path: 'historique/:id' ,   component: HistoriqueComponent
},
{ 
  path: 'creanciers' ,   component: CreanciersComponent
},
{ 
  path: 'payment/:id' ,   component: PaymentComponent
},
{ 
  path: 'validation/:id' ,   component: ValidationComponent
},

{ 
  path: 'transfer' ,   component: TransferComponent
},
{ 
  path: 'add_account' ,   component: AddAccountComponent
},

{ 
  path: 'accounts' ,   component: AccountsComponent
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


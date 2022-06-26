import { FacturesComponent } from './factures/factures.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CreanciersComponent } from './creanciers/creanciers.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TransferComponent } from './transfer/transfer.component';
import { AuthGuard } from './auth.guard';

const routes: Routes= [
  { path: 'Authentification', component: AuthentificationComponent},

  { path: '', component: ClientHomeComponent},

  { path: 'Menu', component: MenuComponent,
  canActivate:[AuthGuard]},

  { path: 'Profile', component: ProfileComponent,
  canActivate:[AuthGuard],},

  {path: 'updatePassword' ,   component: ChangePasswordComponent,
   canActivate:[AuthGuard]
  },
{
  path: 'historique' ,   component: HistoriqueComponent,
  canActivate:[AuthGuard]
},
{
  path: 'creanciers' ,   component: CreanciersComponent,
   canActivate:[AuthGuard]
},
{
  path: 'transfer' ,   component: TransferComponent,
  canActivate:[AuthGuard]
},

{
  path: 'transfer' ,   component: TransferComponent,
  canActivate:[AuthGuard]
},

{
  path: 'factures' ,   component: FacturesComponent,
  canActivate:[AuthGuard]
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
   TransferComponent,
   CreanciersComponent,
  FacturesComponent
  ];


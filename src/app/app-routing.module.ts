import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes= [
  { path: 'Authentification', component: AuthentificationComponent},
  { path: 'ClientHome', component: ClientHomeComponent},
  { path: 'Menu', component: MenuComponent},
  { path: 'Profile', component: ProfileComponent}
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
export const routingComponents = [AuthentificationComponent, ClientHomeComponent,MenuComponent,ProfileComponent];

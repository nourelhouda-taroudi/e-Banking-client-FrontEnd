import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { CreanciersComponent } from './creanciers/creanciers.component';
import { HistoriqueComponent } from './historique/historique.component';
import { PaymentComponent } from './payment/payment.component';



const routes:Routes = [
  { 
    path: '' ,   component: ForgotPasswordComponent
  },
  { 
    path: 'acceuil' ,   component: AcceuilComponent
  },
 
  { 
    path: 'historique' ,   component: HistoriqueComponent
  },
  { 
    path: 'creanciers' ,   component: CreanciersComponent
  },
  { 
    path: 'payment' ,   component: PaymentComponent
  },
 

 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ForgotPasswordComponent,AcceuilComponent,HistoriqueComponent,CreanciersComponent,PaymentComponent]
=======
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
>>>>>>> 483264c614a78b9526dfd67629ab583d29a5b0a7

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PaymentComponent } from './payment/payment.component';



=======
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 483264c614a78b9526dfd67629ab583d29a5b0a7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ForgotPasswordComponent,
    AcceuilComponent,
    PaymentComponent,


=======
    routingComponents,
    MenuComponent,
    ProfileComponent
>>>>>>> 483264c614a78b9526dfd67629ab583d29a5b0a7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

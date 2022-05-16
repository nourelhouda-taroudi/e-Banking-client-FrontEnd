import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PaymentComponent } from './payment/payment.component';

import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    PaymentComponent,
    routingComponents,
    MenuComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

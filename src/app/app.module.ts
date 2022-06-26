import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';



import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule} from '@angular/common/http'
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './validation/validation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ClientAuthService } from './services/client-auth.service';
import { ClientService } from './services/client.service';
import { TransferComponent } from './transfer/transfer.component';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,

    PaymentComponent,
    routingComponents,
    MenuComponent,
    ProfileComponent,
    ValidationComponent,
    TransferComponent,
    AddAccountComponent,
    AccountsComponent,
   ChangePasswordComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ClientAuthService,ClientService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';



import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule} from '@angular/common/http'
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ValidationComponent } from './validation/validation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransferComponent } from './transfer/transfer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';


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
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientAuthService } from './services/client-auth.service';
import { ClientService } from './services/client.service';
import { TransferComponent } from './transfer/transfer.component';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FacturesComponent } from './factures/factures.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuComponent,
    ProfileComponent,
    TransferComponent,
    ChangePasswordComponent,
    FacturesComponent,


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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { CreanciersRoutingModule } from '../creanciers/creanciers-routing.module';
import { HistoriqueComponent } from '../historique/historique.component';
import { CreanciersComponent } from '../creanciers/creanciers.component';



@NgModule({
  declarations: [
    CreanciersComponent
  
 
           
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule
  ]
})
export class AcceuilModule { }

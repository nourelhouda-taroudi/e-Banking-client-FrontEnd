import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TransferComponent } from './transfer.component';

const routes: Routes = [
 {
  path:'', component:TransferComponent
 }
];
=======

const routes: Routes = [];
>>>>>>> eee06320cf6888c497b1728ac7a925665f92d620

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { FactureService } from '../config/facture.service';
import { ProfileService } from '../config/profile.service';

import { agences } from '../model/agences.model';
import { Client } from '../model/client.model';
import { factures } from '../model/facture.model';
import { ClientService } from '../services/client.service';



@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  public connectedClient: Client = new Client();
  constructor(private facturesService: FactureService ,
     private router: Router,
     private profileService: ProfileService,
     private service:AccountsService,
     private clientService: ClientService,
     private accountService:AccountsService
  ) {}
  public client: Client = new Client();
  public num : Number = new Number();
  public factures!: factures[];
  public connected_client_id : Number = this.profileService.getClient().id;
  public agence_selected_title : String = this.profileService.getAgtId().title;
  edite = false;

  ngOnInit(): void {
    this.factures=[]
    this.connectedClient= this.profileService.getClient()
    this.getClientByIdUser(this.connected_client_id);
  }

  public getClientByIdUser(id: Number){
    this.facturesService.getRealId(id).subscribe((response:any)=>{
      this.client= response
      this.getFactures(this.agence_selected_title);
    }
    );}

  public getFactures(name_agence:String): void{
    this.facturesService.getFactures(this.client.id,name_agence).subscribe(
      (response: factures[]) => {
        this.factures = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public pay(facture : factures): void{
    this.facturesService.updateFacture(facture,facture.id).subscribe((response : any)=>{
      this.clientService
      .getUserById(Object.values(this.connectedClient)[0])
      .subscribe((response: any) => {
      this.service
      .getAccountByClient(Number(Object.values(response)[0]))
      .subscribe((response : {}) =>{
        console.log(response)
      const accountSource= Number(Object.values(response)[2]);
      const amount=facture.prix;
      this.accountService.debit(accountSource,amount).subscribe((response)=>{})


    })
    this.ngOnInit();

  })
})}}
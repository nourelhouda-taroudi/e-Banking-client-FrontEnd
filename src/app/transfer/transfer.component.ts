import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../config/account.service';

import { ProfileService } from '../config/profile.service';
import { AccountDetails } from '../model/account.model';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public connectedClient: Client = new Client();

  constructor(
    private accountService:AccountsService,
    private clientService: ClientService,
    private profileService:ProfileService
    ){ }


  ngOnInit(): void {
    this.connectedClient= this.profileService.getClient()

  }

  save(data : any){

        this.clientService
        .getUserById(Object.values(this.connectedClient)[0])
        .subscribe((response: any) => {
        this.accountService
        .getAccountByClient(Number(Object.values(response)[0]))
        .subscribe((response : {}) =>{
        const accountSource= Number(Object.values(response)[2]);
        const accountDestination= Number(Object.values(data)[0]);
        const amount= Number(Object.values(data)[1]);
        const code =Number(Object.values(data)[2]);
        if(Object.values(response)[1] == code){
        this.accountService
        .transfer(accountSource,accountDestination,amount)
        .subscribe((responce) =>{
        }
        )
      }else{
        console.log("bad codeeee")
      }
    
      })
      })
   
    
  }
}

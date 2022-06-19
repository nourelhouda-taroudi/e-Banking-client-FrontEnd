import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { ProfileService } from '../config/profile.service';

import { AccountDetails, AccountOperation } from '../model/account.model';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  public connectedClient: Client = new Client();
  constructor(private route:ActivatedRoute
    ,private router:Router,
     private service:AccountsService,
     private profileService:ProfileService,
     private clientService: ClientService) { }

  ngOnInit(): void {

    // this.route.paramMap.subscribe((parameterMap) => {
    //   const id = String(parameterMap.get('id'));
    //   this.getAssoci(id);
    //   console.log("idd is "+id);
    // });

    this.connectedClient= this.profileService.getClient()
    console.log(this.connectedClient)
  this.getAssoci()
  }

  data:AccountOperation={
    amount: 0,
    type: '',
    account_id: '',
    operationDate: new Date()
  }
   operations!:AccountOperation[];
   account!:AccountDetails;
  
  getAssoci() {

    console.log(Object.values(this.connectedClient)[0])
    this.clientService
    .getUserById(Object.values(this.connectedClient)[0])
    .subscribe((response: any) => {
      console.log("hooohoohoo"+Number(response))
      this.service.getAccountByClient(Number(Object.values(response)[0])).subscribe(
      (response) => {
        this.account = response;
        this.data={
          operationDate : new Date(),
          amount:0,
          type:'',
         account_id:String(Object.values(response)[0])
         
        }
      

        this.service.getAccountOperations(this.data.account_id).subscribe((respon: AccountOperation[]) => {
              this.operations = respon;
             console.log(this.operations)
             
            },)
  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  })
}

}

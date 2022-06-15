import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../config/account.service';
import { ClientService } from '../config/client.service';
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  response: any;

  constructor(private accountService:AccountsService, private clientService: ClientService) { }



  ngOnInit(): void {
  }


 

  save(data : any){

    this.accountService
    .getAccountByClient(1)
    .subscribe((response : {}) =>{



      for(let  i of Object.values(response)){

    
            
      }
 
         }
    
   
    )
 
    const accountSource= String(Object.values(data)[0]);
    const accountDestination= String(Object.values(data)[1]);
    const amount= Number(Object.values(data)[2]);
   
    this.accountService
    .transfer(accountSource,accountDestination,amount)
    .subscribe((responce) =>{
      console.log(responce)
    }
    )

    
  }
}

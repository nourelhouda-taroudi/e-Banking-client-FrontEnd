import { Component, EventEmitter, Input, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { agences } from '../model/agences.model';
import { AgencesService } from '../config/agences.service';
import { PaymentComponent } from '../payment/payment.component';
import { ClientService } from '../config/client.service';
import { Client } from '../model/client.model';
import { AccountsService } from '../config/account.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input('agence') agence!: agences;

   payment !: PaymentComponent;
  public data1!:{
    first:string,
    second:string
  } 

  client: Client={
    name: '',
    email: ''
  }
  constructor(
    @Optional() private route : ActivatedRoute,
   @Optional() private service:AgencesService,
   private clientService:ClientService,
   public accountservice:AccountsService
) { }




  ngOnInit(): void {

    this.route.paramMap.subscribe((parameterMap) => {
      const id = Number(parameterMap.get('id'));
      this.getPaymentByID(id);
   
    });
  }


  getPaymentByID(id : number){
    return  this.service.getById(id).subscribe(
      (response)=>{
        this.agence=response
     
     console.log(response)
    }
    )

  }

  public save(data : any){

    console.log(data)
 
    this.data1={

      first: `${Object.values(data)[0]}`,
      second: `${Object.values(data)[1]}`,

    }

    this.clientService.getClientByName(this.data1.first).subscribe(
      (response: {}) =>{
        console.log("client"+ Object.values(response) )

     this.client={
       name:`${Object.values(response)[0]}`,
       email:`${Object.values(response)[1]}`
     }

        this.accountservice.getAccountByClient(1).subscribe((resp :{}) =>
        console.log(Object.values(resp)[1])
          )

          

       
      }
    )
    
    console.log("data 1 is "+ this.data1)
 

   }
  

  
}

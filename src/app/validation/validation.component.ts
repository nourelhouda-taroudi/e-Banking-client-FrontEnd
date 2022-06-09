import { Component, EventEmitter, Input, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { agences } from '../model/agences.model';
import { AgencesService } from '../config/agences.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input('agence') agence!: agences;
   event!:string;
   payment !: PaymentComponent;
  public data1!:{
    first:string,
    second:string
  } 
  constructor(
    @Optional() private route : ActivatedRoute,
   @Optional() private service:AgencesService) { }


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
    
    console.log("data 1 is "+ this.data1)
 

   }
  

  
}

import { Component, EventEmitter, Input, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { agences } from '../config/agences';
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
  private data1:any;
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
  messageEvent = new EventEmitter<string>();
  public save(data : any){

    console.log(data)
 
    this.data1=Object.values(data)[0]
    console.log("data 1 is "+ this.data1)
   console.log( this.messageEvent.emit(this.data1))

   }
  

  
}

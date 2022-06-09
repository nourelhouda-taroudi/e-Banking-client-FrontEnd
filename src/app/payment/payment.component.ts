import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { agences } from '../model/agences.model';
import { AgencesService } from '../config/agences.service';
import { ValidationComponent } from '../validation/validation.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creanciers:agences={
    id: 0,
    nom: '',
    facturation: '',
    image: '',
    description: '',
    choix: ''

  }
 var!:ValidationComponent;
  foo:ValidationComponent = new ValidationComponent(this.route,this.service);
  public data1: any;
  constructor(private route :ActivatedRoute , private service: AgencesService, private router : Router) {}
  @Input('agence') agence!: agences;
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
  navigateTo(agence:any){
    this.creanciers=agence
    console.log(this.creanciers.id)

    this.router.navigate(['validation',this.creanciers.id])
    
 }
 






}

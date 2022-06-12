import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { AccountDetails, AccountOperation } from '../model/account.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private service:AccountsService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((parameterMap) => {
      const id = String(parameterMap.get('id'));
      this.getAssoci(id);
      console.log("idd is "+id);
    });


  }

  data:AccountOperation={
    amount: 0,
    type: '',
    account_id: '',
    operationDate: new Date()
  }
   operations!:AccountOperation[];
   account!:AccountDetails;
  
  getAssoci(id: string) {
    return this.service.getAccountByid(id).subscribe(
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
  }

}

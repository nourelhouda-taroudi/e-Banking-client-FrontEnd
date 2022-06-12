import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor( private accountService:AccountsService, private route:ActivatedRoute, private router:Router) { }


  data:AccountDetails={
    balance: 0,
    rib: 0,
    code: 0,
    id: ''
  }
  ngOnInit(): void {


    // this.route.paramMap.subscribe((parameterMap) => {
    //   const id = String(parameterMap.get('id'));
    //    this.getAccountById(id)
    //    console.log(this.getAccountById(id))
    //   console.log("hereeisid")
    //   ;});
    this.getAccouts()
  }


  accounts!:AccountDetails[] ;
 public  account: AccountDetails | undefined;


  getAccouts(){
   
    return this.accountService.getAccountByClient(1).subscribe((response: AccountDetails[]) => {
     this.accounts= response;
   console.log(response)
    
   },
   (error : HttpErrorResponse) => {
     alert(error.message)
   }
 );
 
   }

   getAccountById(id: string) {
    return this.accountService.getAccountByid("00f5f186-cebe-43ae-bc58-4d91ee898f35").subscribe(
      (response) => {
        console.log("response")
        this.account = response;
        console.log("heree")
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  navigateTo(account:any){
    this.data=account
  
    console.log(this.data.id)
    this.router.navigate(['historique',this.data.id])
    
 }


}

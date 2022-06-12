import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccountDetails } from '../model/account.model';
import { AccountsService } from '../config/account.service';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})





export class AddAccountComponent implements OnInit {
 

 
  constructor(private router :Router, private accountService:AccountsService) { }
  
 
 
  ngOnInit(): void {
  }

  public code !: number ;
  public rib !: number ;



  addAccount(id:number,data:any){

    console.log(data)

   const  balance= Number(Object.values(data)[0])

    this.accountService
    .saveAccount(id,balance )
    .subscribe( (response :{} ) =>{
      console.log(response),
      this.code=Number(Object.values(response)[1])
      this.rib=Number(Object.values(response)[7])

      console.log(response)
   

     

    }
      
      
      )

    
     
    //   console.log(response)
    // const location = Object.values(response)[1]

    
    

    

    

  }
}

import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { agences } from '../config/agences';
import { AgencesService } from '../config/agences.service';
import { Client } from '../creanciers/Client';
import { search } from './search';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  router: any;
  username!: string;
  password!: string;
  message='';
  public search : search = new search();

  constructor(private agenceService:  AgencesService, private route :Router) { }
  
  public agences!: agences[];

  client = new Client();
  ngOnInit(): void {
  }
  
  goToConn(pageName: string): void{
  
    this.router.navigate([`${pageName}`]);

  }

  public Search(homeform: NgForm){
    //stringify: convert javascript data to json-formatted string
      console.log(JSON.stringify(homeform.value))
  
    }

    public loginUser(){
      this.agenceService.loginUser(this.client).subscribe(
        data => {
         this.agenceService.checkPass(this.client).subscribe(
              data1 => {
                this.route.navigate(['/updatePassword'])
                console.log("response received")
              },
              error =>{

                console.log("erruer"),
                this.route.navigate(['/creanciers'])
              }
            
         )

         
          console.log("response received")
        },
       
        error =>{

        console.log("erruer"),
        this.message="Bad credentials please enter a valid email and password";
      }

      )
    }

  

  

   
 
  
    }
  

  

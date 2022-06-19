import { ClientAuthService } from './../services/client-auth.service';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { agences } from '../model/agences.model';
import { AgencesService } from '../config/agences.service';
import { Client } from '../model/client.model';
import { search } from './search';
import { ClientService } from '../services/client.service';
import { AuthService } from '../config/auth.service';
import { ProfileService } from '../config/profile.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  username!: string;
  password!: string;
  message='';
  public search : search = new search();
  public connectedClientId : Number = new Number();
  public connectedClient: Client = new Client();
  client : Client = new Client();

  constructor(private agenceService:  AgencesService,
    private clientservice:ClientService  ,
    private userAuthService:ClientAuthService,
    private route :Router,
    private tokem : AuthService,
    private profileService: ProfileService) { }
  
  public agences!: agences[];

 
  ngOnInit(): void {
  }
  
  // goToConn(pageName: string): void{
  
  //   this.router.navigate([`${pageName}`]);

  // }

  public Search(homeform: NgForm){
    //stringify: convert javascript data to json-formatted string
      console.log(JSON.stringify(homeform.value))
  
    }

    // public loginUser(){
    //   this.agenceService.loginUser(this.client).subscribe(
    //     data => {
    //      this.agenceService.checkPass(this.client).subscribe(
    //           data1 => {
    //             this.route.navigate(['/updatePassword'])
    //             console.log("response received")
    //           },
    //           error =>{

    //             console.log("erruer"),
    //             this.route.navigate(['/creanciers'])
    //           }
            
    //      )

         
    //       console.log("response received")
    //     },
       
    //     error =>{

    //     console.log("erruer"),
    //     this.message="Please enter a valid email and password !";
    //   }

    //   )
    // }

    /*public getClientById(id : Number) : Client|any{

      
      )

    }*/
    login(homeform: NgForm){
            this.clientservice.login(homeform.value).subscribe(
              (response: any) => {
              

                console.log(response)
               
                const role = response.roles[0];
                const token =Object.values(response)[4]
                if (role === 'ROLE_CLIENT') {

                
                 localStorage.setItem('token',String(token))
                 this.connectedClientId=response.id;
                 
                 this.clientservice.getClientById(this.connectedClientId).subscribe((response:Client | any) =>
                {
                    console.log(response)
                    this.connectedClient = response
                    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiotoooooooooooo")
                    console.log(this.connectedClient)
                    console.log("ouioouiouiouiouiouiouiouio")
                    console.log(this.connectedClient)
                    this.route.navigate(['/Profile']);
                    this.profileService.setClient(this.connectedClient)
                })
                
                } else {
                  this.route.navigate(['/Authentification']);
                }
                // console.log(this.userAuthService.getToken());
              },
              (error) => {
                console.log(error);
              }
            );
    }


 
  }

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

    login(homeform: NgForm){
            this.clientservice.login(homeform.value).subscribe(
              (response: any) => {
                const role = response.roles[0];
                const token =response.accessToken;
                if (role === 'ROLE_CLIENT') {
                 localStorage.setItem('token',String(token))
                 this.connectedClientId=response.id;
                 this.clientservice.getClientById(this.connectedClientId).subscribe((response:Client | any) =>
                {
                    this.connectedClient = response
                    if(this.connectedClient.first_time === "not_change"){
                      this.route.navigate(['/updatePassword']);
                    }else 
                    this.route.navigate(['/Profile']);
                    this.profileService.setClient(this.connectedClient)
                })
                
                } else {
                  this.route.navigate(['/Authentification']);
                }
               
              },
              (error) => {
                console.log(error);
              }
            );
    }


 
  }

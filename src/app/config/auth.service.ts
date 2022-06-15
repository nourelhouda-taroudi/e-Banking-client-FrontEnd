import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ClientService } from "../services/client.service";

import { tap } from 'rxjs/operators';
import { Route, Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
  })
  export class AuthService {


        constructor(private router:Router) { }
        
    
        loggedIn() {
        return  !!localStorage.getItem('token')
        }


       logOut(){
        localStorage.removeItem('token')
        this.router.navigate(['/Authentification'])
       }
      
      }
  
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './config/auth.service';
import { ClientService } from './services/client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private userService: ClientService,
    private router: Router
  ) {}

  canActivate():boolean{
   
      if(this.authService.loggedIn()) {
      
        return true;
      }else{
        this.router.navigate(['/Authentification'])
        return false;
      }
   
  }


}

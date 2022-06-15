import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../config/auth.service';
import { ClientAuthService } from './client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  PATH_OF_API = 'http://localhost:8090';
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: ClientAuthService,
    private token : AuthService
  ) {}

  public login(loginData: any) {
    console.log(loginData)
    return this.httpclient.post(this.PATH_OF_API + '/api/auth/signin', loginData, {
      headers: this.requestHeader,
    });
  }

  
}

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../config/auth.service';
import { Client } from '../creanciers/Client';
import { ClientAuthService } from './client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  auth_token = localStorage.getItem('token');
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  requestOptions = { headers: this.headers };
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

  public getClientById(id :any):Observable<Client>{
    console.log(this.headers);
    const token=localStorage.getItem('token');
    const hds = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.httpclient.get<Client>(`http://localhost:8090/client/${id}`,{headers  : hds})
  }
  public getUserById(id :any):Observable<Client>{
    return this.httpclient.get<Client>(`http://localhost:8090/client/find/${id}`,{headers  : this.headers})
  }

}

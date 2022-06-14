import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientAuthService } from './client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  PATH_OF_API = 'http://localhost:8090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: ClientAuthService
  ) {}

  public login(loginData: any) {
    console.log(loginData)
    return this.httpclient.post(this.PATH_OF_API + '/api/auth/signin', loginData, {
      headers: this.requestHeader,
    });
  }
}

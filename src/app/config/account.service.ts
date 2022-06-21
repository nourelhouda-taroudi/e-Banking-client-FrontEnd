import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AccountDetails} from "../model/account.model";
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

   auth_token = localStorage.getItem('token');
  
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });
  
  requestOptions = { headers: this.headers };
  constructor(private http : HttpClient) { }

  public getAccount(accountId : string, page : number, size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
  public getAccountByClient(id :number):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/${id}/accounts`,{headers  : this.headers})
  }

  public getAccountByid(id :string):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/accounts/${id}`,{headers  : this.headers})
  }

  public getAccountOperations(id :string):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/${id}/operations`,{headers  : this.headers})
  }

  public saveAccount(id:number, balence: number):Observable<Client>{
    return this.http.post<Client>(`http://localhost:8090/account/${id}`,balence,{headers  : this.headers});
  }


  public debit(accountId : string, amount : number){
    let data={accountId : accountId, amount : amount}
    return this.http.post("http://localhost:8090/accounts/debit",data,{headers  : this.headers});
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/credit",data,{headers  : this.headers});
  }

  public transfer(accountSource: number,accountDestination: number, amount : number){
    let data={accountSource, accountDestination, amount}
    return this.http.post("http://localhost:8090/accounts/transfer",data,{headers  : this.headers});
  }
}
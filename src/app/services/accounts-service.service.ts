import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../creanciers/Client';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
 
 /* constructor(private http : HttpClient) { }

  public getAccount(accountId : string, page : number, size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
  public getAccountByClient(id :number):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/client/${id}/accounts`)
  }

  public getAccountByid(id :string):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/accounts/${id}`)
  }

  public getAccountOperations(id :string):Observable<any>{
    return this.http.get<any>(`http://localhost:8090/${id}/operations`)
  }

  public saveAccount(id:number, balence: number):Observable<Client>{
    return this.http.post<Client>(`http://localhost:8090/account/${id}`,balence);
  }


  public debit(accountId : string, amount : number){
    let data={accountId : accountId, amount : amount}
    return this.http.post("http://localhost:8090/accounts/debit",data);
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/credit",data);
  }

  public transfer(accountSource: string,accountDestination: string, amount : number){
    let data={accountSource, accountDestination, amount}
    return this.http.post("http://localhost:8090/accounts/transfer",data);
  }*/
}


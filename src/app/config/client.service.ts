import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import { Client } from '../creanciers/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomer(customer: Client):Observable<Client>{
    return this.http.post<Client>(environment.backendHost+"/customers",customer);
  }
  public deleteCustomer(id: number){
    return this.http.delete(environment.backendHost+"/customers/"+id);
  }
}
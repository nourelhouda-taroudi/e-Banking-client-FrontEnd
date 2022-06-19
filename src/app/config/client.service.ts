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

  public getClient():Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost+"/customers")
  }

  
  public searchClient(keyword : string):Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveClient(customer: Client):Observable<Client>{
    return this.http.post<Client>(environment.backendHost+"/customers",customer);
  }
  
  public deleteClient(id: number){
    return this.http.delete(environment.backendHost+"/customers/"+id);
  }

 

  public getClientByIdUser(id :any):Observable<Client>{
    return this.http.get<Client>(`http://localhost:8090/client/find/${id}`)
  }

  public getClientByName(name :any):Observable<Client>{
    return this.http.get<Client>(`http://localhost:8090/client/${name}`)
  }
}

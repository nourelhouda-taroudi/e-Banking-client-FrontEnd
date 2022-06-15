import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { agences } from "./agences";
import {Client} from "../creanciers/Client";

@Injectable({
  providedIn: 'root'
})
export class AgencesService {


    constructor( private http:  HttpClient){}

    public getAgences(): Observable<agences[]>{
        return this.http.get<agences[]>( ' http://localhost:8090/users/all');
    }

  
  
// public loginUser(client :Client): Observable<any>{
//   return this.http.post<any>('http://localhost:8090/users/login',client);

// }

public checkPass(client :Client): Observable<any>{
  return this.http.post<any>('http://localhost:8090/users/check',client);

}

public getById(id:number): Observable<agences>{
  return this.http.get<agences>( `http://localhost:8090/users/find/${id}`);

}





}

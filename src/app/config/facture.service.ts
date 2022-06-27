import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../creanciers/Client';
import { agences } from '../model/agences.model';
import { factures } from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  auth_token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  requestOptions = { headers: this.headers };


  constructor(private http: HttpClient) { }

  real_id: Number = new Number();

  public getRealId(id: Number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8090/client/find/${id}`, { headers: this.headers });
  }

  public getFactures(id_client: Number, name_agence: String): Observable<factures[]> {
    return this.http.get<factures[]>(`http://localhost:8090/client/facture/${id_client}/${name_agence}`, { headers: this.headers });
  }

  public updateFacture(facture:any,id_facture: Number): Observable<factures> {
    return this.http.put<factures>(`http://localhost:8090/client/facture/update/${id_facture}`,facture,{ headers: this.headers });

  }


  public checkPass(client: Client): Observable<any> {
    return this.http.post<any>('http://localhost:8090/users/check', client);

  }

  public getById(id: number): Observable<factures> {
    return this.http.get<factures>(`http://localhost:8090/users/find/${id}`);

  }
}

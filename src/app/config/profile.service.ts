import { Injectable } from '@angular/core';
import { agences } from '../model/agences.model';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  private c: Client = new Client();
  private agence! : agences;

  setClient(client :Client){
    this.c=client
  
  }

  getClient():Client{
    return this.c
  }

  setAgence(agence : agences){
    this.agence = agence;
  
  }

  getAgtId():agences{
    return this.agence;
  }  
}

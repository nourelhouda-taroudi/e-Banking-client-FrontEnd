import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  private c: Client = new Client();

  setClient(client :Client){
    this.c=client
  
  }

  getClient():Client{
    return this.c
  }
}

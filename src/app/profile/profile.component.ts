import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { ProfileService } from '../config/profile.service';
import { Client } from '../model/client.model';
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private profileService:ProfileService){}

  public connectedClient: Client = new Client();

  ngOnInit(): void {
    this.connectedClient= this.profileService.getClient()
  }

 
}

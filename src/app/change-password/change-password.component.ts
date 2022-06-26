import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isJSDocThisTag } from 'typescript';

import { AccountsService } from '../config/account.service';
import { ClientService } from '../config/client.service';
import { ProfileService } from '../config/profile.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router:Router,private service:AccountsService,  private profileService:ProfileService) { }
  public connectedClient: Client = new Client();

  ngOnInit(): void {
    this.connectedClient= this.profileService.getClient()
  }

  change_Password(data:any){
    console.log(data)
    if(data != '' ){
      this.service.changePassword(Object.values(this.connectedClient)[0],data).subscribe(
        (response)=>{
           console.log("changed")
           this.router.navigate(['/creanciers']);
        }
            )
          }

}



}

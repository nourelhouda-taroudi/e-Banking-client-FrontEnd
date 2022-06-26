import { ClientAuthService } from './../services/client-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  constructor(private client:ClientAuthService) { }

  ngOnInit(): void {
  }
  test(){
    console.log(this.client.getToken());
  }
}

import { ClientAuthService } from './../services/client-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private clientauthservice:ClientAuthService,private router:Router) { }

  ngOnInit(): void {
  }
 logou(){
  this.clientauthservice.clear();
  this.router.navigate(["/"])
 }
}

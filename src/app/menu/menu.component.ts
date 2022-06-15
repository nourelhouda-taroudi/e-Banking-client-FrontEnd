import { ClientAuthService } from './../services/client-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../config/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private clientauthservice:ClientAuthService,private router:Router, public authService:AuthService) { }

  ngOnInit(): void {
  }
 logou(){
  this.clientauthservice.clear();
  this.router.navigate(["/"])
 }
}

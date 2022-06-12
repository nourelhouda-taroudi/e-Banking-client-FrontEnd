import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToConn(pageName: string): void{
  
    this.router.navigate([`${pageName}`]);

  }
}

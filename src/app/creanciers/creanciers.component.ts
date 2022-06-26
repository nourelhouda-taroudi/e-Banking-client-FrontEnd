import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { agences } from '../model/agences.model';
import { AgencesService } from '../config/agences.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../config/profile.service';

@Component({
  selector: 'app-creanciers',
  templateUrl: './creanciers.component.html',
  styleUrls: ['./creanciers.component.css']
})
export class CreanciersComponent implements OnInit {

  constructor( private agenceService:  AgencesService, private router: Router,private profileService: ProfileService) {}

  public agences!: agences[];
  edite = false;

  creanciers:agences={
    id: 0,
    title: '',
    image: '',
    address: '',
    service: ''
  }

  ngOnInit(): void {
    this.getAgences();
  }

  public getAgences(): void{
    this.agenceService.getAgences().subscribe(
      (response: agences[]) => {
        this.agences = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
    navigateTo(agence:any){
      this.creanciers=agence
      this.profileService.setAgence(this.creanciers)
      this.router.navigate(['/factures'])

   }




}

import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { agences } from '../config/agences';
import { AgencesService } from '../config/agences.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creanciers',
  templateUrl: './creanciers.component.html',
  styleUrls: ['./creanciers.component.css']
})
export class CreanciersComponent implements OnInit {

  constructor( private agenceService:  AgencesService, private router: Router) {}
   
  public agences!: agences[];
  edite = false;

  creanciers:agences={
    id: 0,
    nom: '',
    facturation: '',
    image: '',
    description: '',
    choix: ''
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

  public searchFacture(key: string): void{
    const results: agences[] = [];
    console.log(key)
    for (const agences of this.agences){
      if (agences.facturation.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      || agences.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      || agences.nom.indexOf(key) !== -1 ){
        results.push(agences);
      }
    }
    this.agences = results;
    console.log(results)
    if (results.length === 0 || !key){
      this.getAgences();
    }
  }

 
    public onChange(event: any): void {  //event will give you full breif of action
      const choix = event.target.value;
      console.log(choix);
      const results: agences[] = [];
      for (const agences of this.agences){
        if (agences.choix.toLocaleLowerCase().indexOf(choix.toLocaleLowerCase()) !== -1 ){
          results.push(agences);
         
        }
      }
      this.agences = results;
      this.onChange(event);
      if (results.length === 0 || !choix){
        this.getAgences();
      }
   
    }


    navigateTo(agence:any){
      this.creanciers=agence
      console.log(this.creanciers.id)

      this.router.navigate(['payment',this.creanciers.id])
      
   }

   
  

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../config/account.service';
import { FactureService } from '../config/facture.service';
import { ProfileService } from '../config/profile.service';
import { Client } from '../creanciers/Client';
import { agences } from '../model/agences.model';
import { factures } from '../model/facture.model';



@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  constructor(private facturesService: FactureService , private router: Router,private profileService: ProfileService) {}
  public client: Client = new Client();
  public num : Number = new Number();
  public factures!: factures[];
  public connected_client_id : Number = this.profileService.getClient().id;
  public agence_selected_title : String = this.profileService.getAgtId().title;
  edite = false;

  ngOnInit(): void {
    this.factures=[]
    this.getClientByIdUser(this.connected_client_id);
  }
  
  public getClientByIdUser(id: Number){
    this.facturesService.getRealId(id).subscribe((response:Client)=>{
      this.client= response
      this.getFactures(this.agence_selected_title);
    }
    );}

  public getFactures(name_agence:String): void{
    this.facturesService.getFactures(this.client.id,name_agence).subscribe(
      (response: factures[]) => {
        this.factures = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public pay(facture : factures): void{
    this.facturesService.updateFacture(5).subscribe((response : any)=>{
      console.log(response);
      
    })
    
    
    this.ngOnInit();
  }
 

 

 
    




   
  

}

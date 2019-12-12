import { Component, OnInit, Input } from '@angular/core';
import { produit } from '../Produits/Produit.model';
import {PanierService} from '../service/panier.service';
import {AuthService} from '../service/auth.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import{MatDialog} from '@angular/material';
import { CommandeComponent } from '../commande/commande.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [MatSnackBar,MatDialog]

})
export class PanierComponent implements OnInit {

produitspanier:produit[]=[];

constructor(private panierService:PanierService,private snackBar : MatSnackBar,private authService : AuthService,
  private router : Router,private dialog:MatDialog) {
}

  ngOnInit() {
    this.produitspanier=this.panierService.getpanier();
    console.log(this.produitspanier);
 }


 acheter_Produit(p) {
    if(!this.authService.getAuth())
      this.snackBar.open("Please Sign In first" ,"", {
          duration: 1500,
       });
   else
   {

     let dialogRef = this.dialog.open(CommandeComponent, {
       height: '400px',
       width: '600px',
     });

   }
      // this.router.navigate(['/commande']);
    }


    supprimer(p){
       this.produitspanier.splice(this.panierService.getpanier().indexOf(p),1);
     }

}

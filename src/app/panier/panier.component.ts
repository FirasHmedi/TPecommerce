import { Component, OnInit, Input } from '@angular/core';
import { produit } from '../Produits/Produit.model';
import {PanierService} from '../service/panier.service';
import {AuthService} from '../service/auth.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [MatSnackBar]

})
export class PanierComponent implements OnInit {

produitspanier:produit[]=[];

constructor(private panierService:PanierService,private snackBar : MatSnackBar,private authService : AuthService,private router : Router) {

}

  ngOnInit() {
    this.produitspanier=this.panierService.getpanier();
    console.log(this.produitspanier);


 }

 acheter(p) {
   if(!this.authService.getAuth())
     this.snackBar.open("Please Sign In first" ,"", {
         duration: 1500,
      });
  else
      this.router.navigate(['/commande']);
   }

   supprimer(p){
      this.produitspanier.splice(this.panierService.getpanier().indexOf(p),1);
    }

}
 

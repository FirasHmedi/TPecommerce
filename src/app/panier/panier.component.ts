import { Component, OnInit, Input } from '@angular/core';
import { produit } from '../Produits/Produit.model';
import{PanierService} from '../service/panier.service'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],

})
export class PanierComponent implements OnInit {

produitspanier:produit[]=[];

constructor(private panierService:PanierService) {
// this.produits=this.panierService.getpanier();
//console.log(this.p);
}

  ngOnInit() {
    this.produitspanier=this.panierService.getpanier();
    console.log(this.produitspanier);

    //   this.produits=this.panierService.getpanier();
//console.log(this.produits);
 }
 Supprimer(produit_a_supprimer:produit){
   
   this.panierService.getpanier().splice(this.panierService.getpanier().indexOf(produit_a_supprimer),1);
 }
}

import { Injectable } from '@angular/core';
import { produit } from '../Produits/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
private Produitspanier:produit[]=[
];
  constructor() { }

  add_au_panier(p: produit){
    this.Produitspanier.push(p);
  }
  getpanier(){
    return(this.Produitspanier.slice());
  }
}

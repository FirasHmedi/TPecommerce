import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { produit } from '../Produit.model';
import { ProduitService } from './../../service/produit.service';
import { PanierService } from 'src/app/service/panier.service';
import { HeaderServiceService } from 'src/app/service/header-service.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css']
})
export class ProduitsListComponent implements OnInit
{
  produits:produit[];
  //searchValue=this.getSearchValue();
  search:string;
  PrixStatus;

  constructor(private produitService: ProduitService,private panierService:PanierService,
    private headerService:HeaderServiceService ,private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.produits = this.produitService.getAllProduits();
    this.search='';
    this.PrixStatus=null;
  }

    getSearchValue(){
      console.log(this.headerService.getheaderSearch());
      return(this.headerService.getheaderSearch());
    }


  AfficherProduitsCategorie(categorie:string){
    if(categorie=="")
    this.produits = this.produitService.getAllProduits();
    else
    this.produits = this.produitService.getProduitsParCategorie(categorie);
  }


  ajouter(pa:produit){
    this.snackBar.open(pa.ProduitName+" ajouté au panier" ,"", {
        duration: 2500,
     });
    this.panierService.add_au_panier(pa);
  //  console.log(this.panierService.getpanier());
  }

}

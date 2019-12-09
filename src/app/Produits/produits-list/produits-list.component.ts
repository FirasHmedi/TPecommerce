import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { produit } from '../Produit.model';
import { ProduitService } from './../../service/produit.service';
import { PanierService } from 'src/app/service/panier.service';
import { HeaderServiceService } from 'src/app/service/header-service.service';
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
    private headerService:HeaderServiceService) { }

  ngOnInit() {
    this.produits = this.produitService.getAllProduits();
    this.search='';
    this.PrixStatus=null;
  }

getSearchValue(){
  console.log(this.headerService.getheaderSearch());
  return(this.headerService.getheaderSearch());
}
  ajouter(pa:produit){
    
    if(this.panierService.getpanier().length==0)
    this.panierService.add_au_panier(pa);
    
    else if((this.panierService.getpanier().reverse().includes(pa,0)==true))
    {
      this.panierService.getpanier().reverse().pop;
    }
    else{
    this.panierService.add_au_panier(pa);
    }
  }
  AfficherProduitsCategorie(categorie:string){
    if(categorie=="")
    this.produits = this.produitService.getAllProduits();
    else
    this.produits = this.produitService.getProduitsParCategorie(categorie);
  }

}

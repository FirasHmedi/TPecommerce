import { Injectable } from '@angular/core';
import { produit } from '../Produits/Produit.model';
import { group } from '@angular/animations';
import { AnimationDriver } from '@angular/animations/browser';
import   data  from  '../data.json';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  Categorie_from_header:string;

  private produits : produit[]=data;

  constructor() { console.log(data); }

  public getAllProduits(){
    return this.produits;
  }

  public getProduitsParCategorie(categorie:string){

    let  produitsCategorie = this.produits.filter( produit => produit.categorie==categorie );

      console.log(produitsCategorie);

    return  produitsCategorie;

}


/*
  existe_plusieurs_fois(list:produit[],p:produit):boolean{
    var nb: number=0;
      for(let l of list)
    {
      if(l.ProduitId==p.ProduitId){
        nb=nb+1;
        console.log("nb="+nb);
      }
    }
      if(nb>1)return false;
      return true;

    }*/
    /*
      const allProduits=this.getAllProduits();
      console.log(this.produits_par_categorie);
      console.log(allProduits);
        for (let l of allProduits) {
       console.log(this.existe_plusieurs_fois(allProduits,l));
        if((l.categorie === categorie)&&(this.existe_plusieurs_fois(this.produits_par_categorie,l)==false)){
          this.produits_par_categorie.push(l);
        }
        }
     // console.log(this.produits_par_categorie);
      return this.produits_par_categorie ;*/

      /*  private produits : produit[]= [
          new produit(1,"Pc Asus","Pc avec processeur i5 6eme gén , 8Gég ram",1100,"./assets/pcportable.jpg","INFO"),
          new produit(2,"Smart Tv","Télévision samsung 42°",2000,"./assets/tv.jpg","TVSON"),
          new produit(3,"Camera sécurité","Caméra de sécurité trés fameuse",400,"./assets/camerasecurite.jpg","TVSON"),
          new produit(4,"Samsung s9","Smartphone trés puissant avec beaucoup d'options",1500,"./assets/s9.jpg","TEL"),
          new produit(5,"Iphone X","Apple Iphone X avec 64GB ",1700,"./assets/iphonex.jpg","TEL"),
          new produit(6,"Huawei P20 Lite","Le Huawei P20 Lite est le petit frère du Huawei P20 avec prix débordable",800,"./assets/huaweip20.jpg","TEL"),
          new produit(7,"Reflex Canon EOS 6D Mark II","Caméra trés reconnue",5500,"./assets/canoneos.jpg","TVSON"),
          new produit(8,"MacBook Pro","Processeur 6 cœurs à 2.6GHz , 512Go stockage",7000,"./assets/mac.jpg","INFO"),
        ];*/

}

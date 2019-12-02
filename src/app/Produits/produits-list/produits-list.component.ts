import { Component, OnInit } from '@angular/core';
import { produit } from '../Produit.model';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css']
})
export class ProduitsListComponent implements OnInit {
produits : produit[]= [
  new produit(1,"Produit","some descriptions","./assets/MOKH.jpg","PC"),
  new produit(1,"Produit","some descriptions","./assets/MOKH.jpg","TV"),
  new produit(1,"Produit","some descriptions","./assets/MOKH.jpg","Camera")
  ]

  constructor() { }

  ngOnInit() {
  }
onclick(){

}
}

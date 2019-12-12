import { Component, OnInit,TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './../../service/produit.service';
import { PanierService } from 'src/app/service/panier.service';
import { produit } from '../Produit.model';
import {MatSnackBar} from '@angular/material';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

    produit : produit;
    modalRef: BsModalRef;

  constructor(private snackBar : MatSnackBar,
              private route: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService,
              private panierService:PanierService,
              private modalService: BsModalService) { }


  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    console.log( "param "+param);
    if (param) {
      const id = +param;
      this.produit=this.produitService.getProduit(id);

    }
  }

  openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template);
      }



  ajouter(pa:produit){
    this.snackBar.open(pa.ProduitName+" ajouté au panier" ,"", {
        duration: 2500,
     });
    this.panierService.add_au_panier(pa);
    console.log(this.panierService.getpanier());
  }



}

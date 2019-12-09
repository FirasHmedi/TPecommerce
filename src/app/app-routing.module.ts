import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegistreComponent } from './registre/registre.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsListComponent } from './Produits/produits-list/produits-list.component';
import { HomeProduitComponent } from './Produits/home-produit/home-produit.component';

const routes: Routes = [
  {path: 'signin' , component: SigninComponent},
  {path: 'register' , component: RegistreComponent},
  {path: 'panier' , component: PanierComponent},
  {path: 'home' , component: HomeProduitComponent},
  {path: '' , component: ProduitsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { ProduitsListComponent } from './Produits/produits-list/produits-list.component';
import { HomeProduitComponent } from './Produits/home-produit/home-produit.component';
import { ProduitDetailsComponent } from './Produits/produit-details/produit-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'signin' , component: SigninComponent},
  {path: 'panier' , component: PanierComponent},
  {path: 'produitDetails/:id' , component: ProduitDetailsComponent},
  {path: 'home' , component: HomeProduitComponent},
  {path: 'commande' , component: CommandeComponent,canActivate: [AuthGuard]},
  {path: '' , component: ProduitsListComponent},
  {path: '**', component: HomeProduitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

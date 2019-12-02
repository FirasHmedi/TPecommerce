import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegistreComponent } from './registre/registre.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsListComponent } from './Produits/produits-list/produits-list.component';


const routes: Routes = [
  {path: 'signin' , component: SigninComponent},
  {path: 'register' , component: RegistreComponent},
  {path: 'home' , component: HomeComponent },
  {path: 'panier' , component: PanierComponent},
  {path: '' , component: ProduitsListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { SousHeaderComponent } from './sous-header/sous-header.component';
import { HomeComponent } from './home/home.component';
import { ProduitsListComponent } from './Produits/produits-list/produits-list.component';
import { SigninComponent } from './signin/signin.component';
import { RegistreComponent } from './registre/registre.component';
import { HomeProduitComponent } from './Produits/home-produit/home-produit.component';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';

const appRoutes: Routes =[
  {path: 'signin' , component: SigninComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SousHeaderComponent,
    HomeComponent,
    ProduitsListComponent,
    SigninComponent,
    RegistreComponent,
    HomeProduitComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { ProduitsListComponent } from './Produits/produits-list/produits-list.component';
import { SigninComponent } from './signin/signin.component';
import { RegistreComponent } from './registre/registre.component';
import { HomeProduitComponent } from './Produits/home-produit/home-produit.component';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './service/panier.service';
import { FilterPipe } from './filter.pipe';
import { FormControl } from '@angular/forms';
import { HeaderServiceService } from './service/header-service.service';
import { ProduitService } from './service/produit.service';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes =[
  {path: 'signin' , component: SigninComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ProduitsListComponent,
    SigninComponent,
    RegistreComponent,
    HomeProduitComponent,
    PanierComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    
    ReactiveFormsModule

  ],
  providers: [PanierService,HeaderServiceService,ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

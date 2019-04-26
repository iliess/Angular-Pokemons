import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { PageNotFoundComponent } from './page-notfound.component'
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    PokemonsModule,
    AppRoutingModule],
    
  declarations: [ 
    AppComponent, 
    PageNotFoundComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
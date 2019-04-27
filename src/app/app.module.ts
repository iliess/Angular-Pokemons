import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { PageNotFoundComponent } from './page-notfound.component'
import { AppComponent }  from './app.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    
    PokemonsModule,

    LoginRoutingModule,
    AppRoutingModule
  ],
    
  declarations: [ 
    AppComponent, 
    LoginComponent,
    PageNotFoundComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
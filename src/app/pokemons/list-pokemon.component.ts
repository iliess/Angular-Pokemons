import { Pokemon } from './Pokemon';
import { PokemonsService } from  './pokemons.service'

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'list-pokemon',
  templateUrl: './app/pokemons/list-pokemon.component.html',
  // providers : [PokemonsService]
})

export class ListPokemonComponent  { 
  
  private pokemons: Pokemon[];

  constructor(private router: Router, private pokemonsServide : PokemonsService){}

  ngOnInit(){
    this.pokemons = this.pokemonsServide.getPokemons();
  }

  selectPokemon(pokemon: Pokemon){
    alert("Vous avez cliqué sur "+pokemon.name)
    let link = ['/pokemon', pokemon.id]
    this.router.navigate(link)
  }
  
}
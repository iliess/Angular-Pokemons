import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './Pokemon';
import { PokemonsService } from  './pokemons.service'

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	// providers : [PokemonsService]

})

export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, private router: Router, 
		private pokemonsService : PokemonsService) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemonsService.getPokemon(id)
		.subscribe(pokemon => this.pokemon = pokemon);
	}

	delete(pokemon : Pokemon) : void {
		this.pokemonsService.deletePokemon(pokemon)
		.subscribe(_ => this.goBack());
	}

	goBack(): void {
		this.router.navigate(['/pokemon/all']);
	}

	goEdit(pokemon: Pokemon): void {
		this.router.navigate(['/pokemon/edit', pokemon.id]);
	}

}
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
		private pokemonsServide : PokemonsService) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemon = this.pokemonsServide.getPokemon(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

	goEdit(pokemon: Pokemon): void {
		this.router.navigate(['/pokemon/edit', pokemon.id]);
	}

}
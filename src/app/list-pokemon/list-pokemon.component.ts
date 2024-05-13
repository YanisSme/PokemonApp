import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list'
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})


export class ListPokemonComponent 
{

  constructor (private router : Router) {} // Service on verra ça plus tard 

  pokemonList: Pokemon[] = POKEMONS;  // On crée une variable pokemonList qui reprend notre liste de POKEMONS 


  goToPokemon (pokemon: Pokemon) : void // Va rediriger l'utilisateur directement depuis le component 
  {
    this.router.navigate(['/pokemon', pokemon.id]); // permet de naviguer dans l'url que je veux 
  }
}


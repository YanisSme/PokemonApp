import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})


export class ListPokemonComponent 
{

  constructor (private router : Router, private pokemonService : PokemonService) {} // Initialisation des services : private nom_instance nom_service

  pokemonList: Pokemon[];  

  ngOnInit () {
    this.pokemonList = this.pokemonService.getPokemonList(); // On définit notre PokemonList avec la méthode du service
  }

    goToPokemon (pokemon: Pokemon) : void // Va rediriger l'utilisateur directement depuis le component 
  {
    this.router.navigate(['/pokemon', pokemon.id]); // permet de naviguer dans l'url que je veux 
  }
}


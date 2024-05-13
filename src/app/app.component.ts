import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit
{
  pokemonList: Pokemon[] = POKEMONS;  // On crée une variable pokemonList qui reprend notre liste de POKEMONS 
  pokemonSelected!: Pokemon | undefined; // Le | permet de donner 2 types à la variable 

  ngOnInit (): void 
  {
    console.table(this.pokemonList); // Affiche la liste dans la console sous forme de tableau 
  }

  selectPokemon (pokemonID : string) : void 
  {
    const id = +pokemonID; // "+" pour convertir le string en number 
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonID); // find cherche, pour chaque élément pokemon dans pokemonList, cette fonction retourne true si l'identifiant (id) du pokemon correspond à pokemonID (converti en nombre avec +pokemonID).
    if (pokemon)
    {    
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`) // Affiche le pokemon que l'utilisateur a demandé (id)
      this.pokemonSelected = pokemon;
    }
    else 
    {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`) // Affiche le pokemon que l'utilisateur a demandé (id)
      this.pokemonSelected = pokemon;

    }
  }
}


/* 
  Si l'utilisateur a saisit "3" dans le input comment je le récupère ici ? :
  Je veux recup l'index qui est de type number donc const index : number = 
  Côté template le type de mon evenement est event.target
  Je dois le caster (conversion de type) en HTMLInputElement pour que le Component comprenne 
  Et ensuite je vais simplement accéder à la valeur que l'utilisateur a saisit avec .value 

  Les target/value code JS/DOM classique 
  La partie chiante Angular c'est devoir le caster avec TS
*/
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

/*
  Un service est un moyen de partager des informations entre des classes qui n e se connaissent pas. 
  Masquer à nos composants comment on recup les données et le fonctionnement de certaines méthodes
  Initialisation des services : private nom_instance nom_service (à faire dans les .ts)
*/

@Injectable( // Le Injectable pour les services   
  // providedIn: 'root' // Garantit qu'on a la même instance de Pokemon partout dans le projet ici on l'injecte uniquement dans le module pokemon / si pour toute l'app on peut mettre provideIn: 'root'
)

export class PokemonService 
{
  getPokemonList () : Pokemon[] 
  { 
    return POKEMONS;
  }

  getPokemonById (pokemonId : number) : Pokemon | undefined 
  {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList (): string[]
  {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
}


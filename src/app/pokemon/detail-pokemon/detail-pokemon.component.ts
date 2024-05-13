import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})

export class DetailPokemonComponent 
{
  pokemonList : Pokemon[]; 
  pokemon : Pokemon | undefined; // pokemon a afficher à l'utilisateur 

  constructor(private route: ActivatedRoute, private router : Router) {} // Service on verra ça plus tard 

  ngOnInit () : void
  {
    this.pokemonList = POKEMONS;
    const pokemonId : string | null = this.route.snapshot.paramMap.get('id'); // Je récupère l'id contenu dans l'url si j'ai un id c'est une string si j'en ai pas c'est un null 
    if (pokemonId) // Si mon id est ok alors je vais attribuer à pokemon le pokemon qui correspond à cette identifiant
    {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }

  goToPokemonList () : void // Va rediriger l'utilisateur directement depuis le component 
  {
    this.router.navigate(['/pokemons']); // permet de naviguer dans l'url que je veux 
  }
}
